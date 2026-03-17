import { HomeTopNavbarContent } from "@/data/Index";
import About from "./Home/About";
import Explore from "./Home/Explore";
import Questions from "./Home/Questions";
import TopNavbar from "./common/TopNavbar";
import Hero from "./Home/Hero";
import Input from "./common/Input";
import TopRightButtons from "./common/TopRightButtons";
import { HiMagnifyingGlass } from "react-icons/hi2";
import ControlGroup from "./common/ControlGroup";
import MobileTopActions from "./common/MobileTopActions";
import Header from "./common/Header";
import Plan from "./Home/Plan";
import StartFree from "./Home/StartFree";
import Footer from "./common/Footer";
import Contact from "./Home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header list={HomeTopNavbarContent} />
      <main className="flex flex-col gap-24 md:gap-32 lg:gap-40">
        <div className="-mt-5">
          <Hero />
        </div>
        <Explore />
        <About />
        <Questions />
        <Plan />
        {/* <StartFree /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
