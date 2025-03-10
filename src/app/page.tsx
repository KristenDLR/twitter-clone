
import { LeftSidebar } from "@/sections/LeftSidebar";
import { Main } from "@/sections/Main";
import { RightSidebar } from "@/sections/RightSidebar";
import { createClient as createClientForServer } from "@/utils/supabase/server";


// const Home: React.FunctionComponent = () => {
export default async function Home() {

  //TODO: Dialogue box with google sign in or email or signUP

  const supabase = await createClientForServer()
  //getUser it sends a request to supaBase server
  const session = await supabase.auth.getUser()
  //getSession should only be used on client side
  //here is sessions I have the email
  console.log(session)

  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      {/* TODO: max-width need to be updated for responsive behavior */}
      <div className="max-w-[82vw] w-full h-full flex relative">
        {/* left sidebar for navigation */}
        <LeftSidebar />
        {/* Main section with twitter feed */}
        <Main />
        {/* right sidebar info */}
        <RightSidebar />
      </div>
    </div>
  )

}

// export default Home;