import { FollowContainer } from "@components/FollowContainer"
import { TrendContainer } from "@components/TrendContainer"
import { BsSearch } from "react-icons/bs"


export const RightSidebar: React.FunctionComponent = () => {

    return (
        <section className="sticky top-2 overflow-scroll mt-2 w-full flex flex-col items-stretch h-screen px-6">
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
            <TrendContainer />
            <FollowContainer />
        </section>
    )
}