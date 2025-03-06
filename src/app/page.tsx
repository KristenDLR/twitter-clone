
import { LeftSidebar } from "@/components/LeftSidebar";


const Home: React.FunctionComponent = () => {

  return (
    <h1 className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation */}
        <LeftSidebar />
       {/* <main>Home section</main> */}
        {/* <section>right section</section> */}
      </div>
    </h1>
  )

}

export default Home;