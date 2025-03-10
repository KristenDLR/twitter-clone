'use client'

import { signInWithGoogle } from "@/utils/supabase/actions"

export const AuthForm: React.FunctionComponent = () => {
    return (
        <div className='flex mt-4 justify-self-center'>
            <form action={signInWithGoogle}>
                <button type="submit" className='p-4 m-2 bg-sky-500'>
                    Sign in with Google
                </button>
            </form>
        </div>
    )
}
