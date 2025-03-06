import { TweetContainer } from "@/components/TweetContainer"

export const Main: React.FunctionComponent = () => {

    return (
        <main className="overflow-visible sticky top-0 h-full flex w-[50%] min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
            {/* TODO: Sticky title not working */}
            <h1 className="text-xl font-bold p-6 backdrop-blur-md  bg-black/10 sticky top-0">Home</h1>
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
                    <TweetContainer key={i} />
                ))}
            </div>
        </main>
    )
}