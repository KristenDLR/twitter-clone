import { NextResponse } from 'next/server'
import { createClientForServer } from '@utils/supabase/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const origin = url.origin

  console.log('👉 Incoming request URL:', request.url)

  // Extract the `code` from searchParams
  const code = searchParams.get('code')
  console.log('🔑 Authorization code received:', code)

  // Extract optional `next` param (for redirecting after login)
  const next = searchParams.get('next') ?? '/'
  console.log('➡️ Redirecting after login to:', next)

  // No code param in query? Something is wrong.
  if (!code) {
    console.error('❌ No authorization code found in query params.')
    return NextResponse.redirect(`${origin}/auth/auth-code-error?message=Missing%20authorization%20code`)
  }

  // Proceed to exchange the code for a Supabase session
  const supabase = await createClientForServer()

  console.log('⚙️ Attempting to exchange code for session...')

  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    console.error('❌ Error exchanging code for session:', error.message)
    return NextResponse.redirect(`${origin}/auth/auth-code-error?message=${encodeURIComponent(error.message)}`)
  }

  console.log('✅ Session exchange successful!')

  // Check forwarded host (important in production with load balancers)
  const forwardedHost = request.headers.get('x-forwarded-host')
  const isLocalEnv = process.env.NODE_ENV === 'development'
  
  if (isLocalEnv) {
    console.log('🌐 Running in local development environment.')
    return NextResponse.redirect(`${origin}${next}`)
  }

  if (forwardedHost) {
    console.log('🌐 Forwarded host detected:', forwardedHost)
    return NextResponse.redirect(`https://${forwardedHost}${next}`)
  }

  console.log('🌐 No forwarded host. Using origin:', origin)
  return NextResponse.redirect(`${origin}${next}`)
}
