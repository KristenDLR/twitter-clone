import Link from "next/link";
import { BsThreeDots, BsTwitter } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { MdNumbers } from "react-icons/md";
import { PiBellBold } from "react-icons/pi";
import { RiHome7Fill } from "react-icons/ri";


export const LeftSidebar: React.FunctionComponent = () => {


    const NAVIGATION_ITEMS = [
        {
            title: 'Twitter',
            icon: BsTwitter,
        },
        {
            title: 'Home',
            icon: RiHome7Fill,
        },
        {
            title: 'Explore',
            icon: MdNumbers,
        },
        {
            title: 'Notifications',
            icon: PiBellBold,
        },
        {
            title: 'Messages',
            icon: LuMail,
        },
        {
            title: 'Bookmarks',
            icon: FaRegBookmark,
        },
        {
            title: 'Profile',
            icon: FaRegUser,
        },
    ]


    return (
        <>
            <section className="fixed w-[275px] flex flex-col h-screen items-stretch px-6">
                <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
                    {NAVIGATION_ITEMS.map((item) => (
                        <Link className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
                            href={`/${item.title.toLocaleLowerCase()}`}
                            key={item.title}
                        >
                            <div>
                                <item.icon />
                            </div>
                            <div> {item.title !== NAVIGATION_ITEMS[0].title && <div>{item.title}</div>}</div>
                        </Link>
                    ))}
                    <button className="m-4 rounded-full bg-sky-500 px-6 py-4 text-2xl text-center hover:opacity-75 transition duration100">
                        Tweet
                    </button>
                </div>

                <button className="m-4 rounded-full flex intems-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-slate-400 w-10 h-10"></div>
                        <div className="text-left text-sm">
                            <div className="font-semibold">
                                USER NAME
                            </div>
                            <div className="text-xs">
                                @userName
                            </div>
                        </div>
                    </div>
                    <div>
                        <BsThreeDots />
                    </div>
                </button>
            </section>
        </>
    )
}