'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const dataForm = {
    email: formData.get('email') as string,
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp({
    email: dataForm.email,
    password: dataForm.password,
    options: {
      data: { username: dataForm.username }, // Pass metadata
    },
  });
  if (error) {
    console.log({ "error": error, "data": dataForm })
    redirect('/error')
  }

  // Fetch the user session to retrieve metadata
  const {
    data: { user: currentUser },
  } = await supabase.auth.getUser();

  console.log("User Metadata:", currentUser?.user_metadata);

  revalidatePath('/', 'layout')
  redirect('/')

  // const { error } = await supabase.auth.signUp(data)

  // if (error) {
  //   console.log({"error:": error, "data": data})
  //   redirect('/error')
  // }

  // revalidatePath('/', 'layout')
  // redirect('/')
}