
import { LeftSidebar } from "@/sections/LeftSidebar";
import { Main } from "@/sections/Main";
import { RightSidebar } from "@/sections/RightSidebar";


const Home: React.FunctionComponent = () => {

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

export default Home;