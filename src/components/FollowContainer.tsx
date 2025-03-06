

interface IFollowContainerProps {
followName?: string;
followUserName?: string;
}

export const FollowContainer: React.FunctionComponent<IFollowContainerProps> = (props) => {
   const {followName, followUserName} = props;

    return (
        <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="front-bold text-xl my-4 px-4">Who to follow</h3>
        <div>
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="hover:bg-white/10 p-4 flex space-x-3 last:rounded-b-xl transition duration-200">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                        <div className="flex flex-col ">
                            <div className="font-bold text-white"> {followName || "Follow User Name"}</div>
                            <div className="text-gray-500 text-xs">{followUserName || "@followUserName"}</div>
                        </div>
                    </div>
                    <button className="rounded-full px-6 py-2 bg-white text-neutral-950">Follow</button>
                </div>
            ))}
        </div>
    </div>
    )
}