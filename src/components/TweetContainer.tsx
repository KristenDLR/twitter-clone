import { AiOutlineRetweet } from "react-icons/ai";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { IoMdHeartEmpty, IoIosStats } from "react-icons/io";
import { SlBubble } from "react-icons/sl";

interface ITweetContainerProps {
    name?: string;
    userName?: string;
    timePosted?: string;
    tweet?: string;
    // replies: number;
    // retweets: number;
    // likes: number;
    // stats: number;
}

export const TweetContainer: React.FunctionComponent<ITweetContainerProps> = (props) => {
   const { name, userName, timePosted, tweet } = props;

    return (

            <div className="p-2 border-b-[0.5px] border-gray-600 flex space-x-4">
                <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center space-x-1 w-full justify-between">
                        <div className="flex items-center space-x-1 w-full">
                            <div className="font-bold">{name || "Tweet Name"}</div>
                            <div className="text-gray-500"> {userName || "@userName" } </div>
                            <div className="text-gray-500"> <BsDot /> </div>
                            <div className="text-gray-500"> {timePosted || "time posted"} </div>

                        </div>
                        <div className="text-gray-500"><BsThreeDots /></div>
                    </div>
                    <div className="text-white text-base">
                        {tweet || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt possimus quae modi, ipsa est. Quasi molestias delectus dolor deleniti facere, neque sed sunt architecto tenetur, beatae minima itaque assumenda adipisci earum id voluptatum eveniet labore placeat, unde aliquam? Labore adipisci possimus repellendus eveniet iste debitis? Sunt tempora repellat minus nobis quae ut fugiat est culpa sint cumque corporis illum voluptatum aspernatur repellendus in quis, architecto reiciendis id nesciunt non corrupti! Molestiae nulla aspernatur quae tempora? Nemo iusto accusamus quae eaque ex voluptas, dolorum reprehenderit eligendi. Temporibus libero, nesciunt tempora sit consectetur autem, placeat voluptatibus error, cum itaque reiciendis culpa!"} 
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
    
    )
}