
import { LeftSidebar } from "@/components/LeftSidebar";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { IoIosStats, IoMdHeartEmpty } from "react-icons/io";
import { SlBubble } from "react-icons/sl";


const Home: React.FunctionComponent = () => {

  return (
    <h1 className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation */}
        <LeftSidebar />
        {/* Main section with twitter feed */}
        <main className="ml-[275px] h-full flex w-full max-w-[600px] min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          {/* TODO: Sticky title not working */}
          <h1 className="text-xl font-bold p-6 bg-black/10 backdrop-blur-md sticky w-full min-h-20 top-0">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] flex items-stretch px-4 py-6 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full ">
              <input
                className="placeholder:text-2xl placeholder:text-gray-600 w-full h-full bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
                type="text"
                placeholder="What's happening?" />
              <div className="w-full justify-between items-center flex">
                <div></div>

                <div className="w-full max-w-[100px]">
                  <button className="front-bold rounded-full bg-sky-500 px-4 py-2 w-full text-lg text-center hover:opacity-75 transition duration200">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-2 border-b-[0.5px] border-gray-600 flex space-x-4">
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1 w-full justify-between">
                    <div className="flex items-center space-x-1 w-full">
                      <div className="font-bold"> Tweet Name </div>
                      <div className="text-gray-500"> @userName </div>
                      <div className="text-gray-500"> <BsDot /> </div>
                      <div className="text-gray-500"> time posted </div>

                    </div>
                    <div className="text-gray-500"><BsThreeDots /></div>
                  </div>
                  <div className="text-white text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt possimus quae modi, ipsa est. Quasi molestias delectus dolor deleniti facere, neque sed sunt architecto tenetur, beatae minima itaque assumenda adipisci earum id voluptatum eveniet labore placeat, unde aliquam? Labore adipisci possimus repellendus eveniet iste debitis? Sunt tempora repellat minus nobis quae ut fugiat est culpa sint cumque corporis illum voluptatum aspernatur repellendus in quis, architecto reiciendis id nesciunt non corrupti! Molestiae nulla aspernatur quae tempora? Nemo iusto accusamus quae eaque ex voluptas, dolorum reprehenderit eligendi. Temporibus libero, nesciunt tempora sit consectetur autem, placeat voluptatibus error, cum itaque reiciendis culpa!
                  </div>
                  <div className=" bg-slate-400 aspect-square w-full h-80 rounded-xl"></div>
                  <div className="flex items-center justify-starts space-x-20 mt-2 w-full">
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><SlBubble /></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineRetweet size={20} /></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoMdHeartEmpty /></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoIosStats /></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><FiShare /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        {/* <section>right section</section> */}
      </div>
    </h1>
  )

}

export default Home;