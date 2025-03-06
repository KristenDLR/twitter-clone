import { AiOutlineRetweet } from "react-icons/ai";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { IoMdHeartEmpty, IoIosStats } from "react-icons/io";
import { SlBubble } from "react-icons/sl";

interface ITrendContainerProps {
 trendHashtag?: string;
 trendStat?: string;
}

export const TrendContainer: React.FunctionComponent<ITrendContainerProps> = (props) => {
   const {trendHashtag, trendStat } = props;

    return (
        <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="front-bold text-xl my-4 px-4">What's happening</h3>
        <div>
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200">
                    <div className="font-bold text-lg"> {trendHashtag || `#trending ${i + 1}`}</div>
                    <div className="text-xs text-neutral-400">{trendStat || "35.4k"}</div>
                </div>
            ))}
        </div>
    </div>
    )
}