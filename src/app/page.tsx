
import AuthOverlay from "@components/sections/AuthOverlay";
import { LeftSidebar } from "@components/sections/LeftSidebar";
import { Main } from "@components/sections/Main";
import { RightSidebar } from "@components/sections/RightSidebar";
import { createClientForServer } from "@utils/supabase/server";


const Home: React.FunctionComponent = async() => {
const supabase = await createClientForServer()
const session = await supabase.auth.getUser()
console.log(session)


  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
          <AuthOverlay user={session.data.user} />
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

export default Home;