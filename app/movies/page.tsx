import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "./Hero";
import Popular from "./Popular";
import Trending from "./Trending";
import TopRated from "./TopRated";
import NewReleases from "./ NewReleases";
import { MoviesTopNavbarContent } from "@/data/Movies";

const page = () => {
  return (
    <div className="flex flex-col gap-16">
      <Header list={MoviesTopNavbarContent} />
      <main className="flex flex-col gap-24 md:gap-32 lg:gap-10">
        <div className="-mt-8">
          <Hero />
        </div>
        <Popular />
        <Trending />
        <TopRated />
        <NewReleases />
        <Footer />
      </main>
    </div>
  );
};

export default page;
