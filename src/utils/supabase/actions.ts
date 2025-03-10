'use server'

import { redirect } from "next/navigation"
import { createClient as createClientForServer } from "./server"
import type { Provider } from "@supabase/supabase-js"

async function signInWith(provider: Provider) {
    const supabase = await createClientForServer()
    const auth_callback_url = `${process.env.SITE_URL}/auth/callback`

    console.log("Redirecting to:", auth_callback_url) 

   const {data, error} = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: auth_callback_url,
        }
    })

    if (error) {
        console.error("OAuth Error:", error)
        throw new Error(error.message) 
    }

    if (!data?.url) {
        console.error("No redirect URL received from Supabase")
        throw new Error("Authentication failed: No redirect URL received.")
    }

    redirect(data.url) 

}

// Accept FormData and log it for debugging
async function signInWithGoogle(formData: FormData) {
    console.log("FormData received:", Object.fromEntries(formData.entries())) // ✅ Log form data

    return signInWith('google' as Provider)
}

export { signInWithGoogle }
