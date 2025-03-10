import { createBrowserClient } from '@supabase/ssr'

//utility function to create Supabase clients
//this gives the application a way to connect to supabase when it is a client component
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
