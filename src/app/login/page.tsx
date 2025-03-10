'use client'

import { signInWithGoogle } from '@/utils/supabase/actions'
import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <div className='flex justify-self-center'>
            <form>
                <div className='p-4'>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" required />
                    <label htmlFor="email">Username:</label>
                    <input id="username" name="username" type="text" required />
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" required />
                </div>

                <button className='p-4 m-2 bg-sky-500' formAction={login}>Log in</button>
                <button className='p-4 m-2 text-sky-500 bg-slate-200' formAction={signup}>Sign up</button>
                <div className='flex mt-4 justify-self-center'>
                    <button formAction={signInWithGoogle} type="submit" className='p-4 m-2 bg-sky-500'>
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    )
}