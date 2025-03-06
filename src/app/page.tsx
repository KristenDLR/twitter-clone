
import { LeftSidebar } from "@/components/LeftSidebar";


const Home: React.FunctionComponent = () => {

  return (
    <h1 className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation */}
        <LeftSidebar />
        <main className="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold my-4 p-6">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] flex items-stretch px-4 py-4 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full ">
              {/* <div className="border-b-[0.5px] border-gray-600"> */}
              <input
                className="placeholder:text-2xl placeholder:text-gray-600 w-full h-full bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
                type="text"
                placeholder="What's happening?" />
              {/* </div> */}
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
        </main>
        {/* <section>right section</section> */}
      </div>
    </h1>
  )

}

export default Home;