import { HomeTopNavbarContent } from "@/data/Index";
import About from "./Home/About";
import Explore from "./Home/Explore";
import Questions from "./Home/Questions";
import Hero from "./Home/Hero";
import Header from "./common/Header";
import Plan from "./Home/Plan";
import Footer from "./common/Footer";
import Contact from "./Home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header list={HomeTopNavbarContent} />

      <main className="flex flex-col gap-24 px-4 pb-24 sm:px-6 md:gap-32 md:pb-8 lg:gap-40 lg:px-10">
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
