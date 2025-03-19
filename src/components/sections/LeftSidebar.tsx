import Link from "next/link";
import { BsThreeDots, BsTwitter } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { MdNumbers } from "react-icons/md";
import { PiBellBold } from "react-icons/pi";
import { RiHome7Fill } from "react-icons/ri";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { Button } from "@components/ui/button";
import { signOut } from "@utils/actions";
import { createClientForServer } from "@utils/supabase/server";


export const LeftSidebar: React.FunctionComponent = async () => {

    const supabase = await createClientForServer()
    const session = await supabase.auth.getUser()

    const userInfoBadge = async () => {
        if (!session.data.user) {
          return (
            <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-400 w-10 h-10" />
                <div className="text-left text-sm">
                  <div className="font-semibold">USER NAME</div>
                  <div className="text-xs">@userName</div>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </button>
          );
        } else {
          const {
            data: {
              user: { user_metadata },
            },
          } = session;
      
          const { name, user_name, avatar_url } = user_metadata;
          const userName = user_name ? `@${user_name}` : "";
      
          return (
            <div className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
              <div className="flex items-center space-x-2">
                {avatar_url && (
                  <img
                    src={avatar_url}
                    alt={name}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                )}
                <div className="text-left text-sm">
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-xs text-muted-foreground">{userName}</div>
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="hover:bg-white/10 p-2 rounded-full transition">
                    <BsThreeDots />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  sideOffset={20}
                  className="w-30 p-0 justify-centerrounded-xl overflow-hidden bg-black text-white shadow-xl"
                >
                  <form action={signOut}>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 text-sm text-center hover:bg-white/10 transition"
                    >
                      Log out {userName}
                    </button>
                  </form>
                </PopoverContent>
              </Popover>
            </div>
          );
        }
      };
      


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
        <section className="sticky top-0 w-[23%] flex flex-col h-screen items-stretch">
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
                <button className="m-4 rounded-full bg-sky-500 px-6 py-4 text-2xl text-center hover:opacity-75 transition duration200">
                    Tweet
                </button>
            </div>
            {userInfoBadge()}
        </section>

    )
}