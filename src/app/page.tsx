
import { LeftSidebar } from "@/sections/LeftSidebar";
import { Main } from "@/sections/Main";
import { BsSearch } from "react-icons/bs";


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
        <section className="sticky top-2 mt-2 w-full flex flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full">

              <input
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
                className="outline-none peer focus:border-sky-500 focus:border-2 bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
              />
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-50 peer-focus:text-sky-500">
                <BsSearch className="w-5 h-5" />
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  )

}

export default Home;