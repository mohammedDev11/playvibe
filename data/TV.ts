import type { MediaCardItem } from "@/data/media";
import { FaPlay } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

export const TvSeriesTopNavbarContent = [
  { label: "Popular", href: "#popular" },
  { label: "Trending", href: "#trending" },
  { label: "Top Rated", href: "#top-rated" },
  { label: "New Releases", href: "#new-releases" },
];

export const HeroContent = {
  movies: [
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes, a small town uncovers secret experiments, terrifying supernatural forces, and a strange girl with powerful abilities.",
      heroImage: "/TV/Hero/stranger_things.jpg",
      position: "top",
    },
    {
      title: "Breaking Bad",
      description:
        "A chemistry teacher diagnosed with cancer turns to cooking meth, beginning a transformation into one of television’s most unforgettable antiheroes.",
      heroImage: "/TV/Hero/breaking_bad.png",
      position: "bottom",
    },
    {
      title: "La Casa de Papel",
      description:
        "A mysterious mastermind known as the Professor assembles a team of criminals for an ambitious heist that becomes a worldwide symbol of resistance.",
      heroImage: "/TV/Hero/la_casa_de_papel.jpg",
      position: "bottom",
    },
  ],
  mainButton: {
    id: 1,
    label: "Play Now",
    icon: FaPlay,
    variant: "primary",
  },
  actions: [
    { id: 1, icon: IoAdd, variant: "icon" },
    { id: 2, icon: FiThumbsUp, variant: "icon" },
    { id: 3, icon: HiOutlineSpeakerWave, variant: "icon" },
  ],
};

// ========== Filters ==========
export const TV_FILTERS = [
  {
    id: "sort",
    label: "Sort",
    options: [
      "Trending",
      "Most Popular",
      "Top Rated",
      "Newest",
      "Oldest",
      "A–Z",
      "Z–A",
    ],
  },
  {
    id: "country",
    label: "Country",
    options: [
      "United States",
      "United Kingdom",
      "France",
      "Germany",
      "India",
      "Japan",
      "South Korea",
      "China",
      "Saudi Arabia",
      "Egypt",
    ],
  },
  {
    id: "language",
    label: "Language",
    options: [
      "English",
      "Arabic",
      "French",
      "Spanish",
      "German",
      "Hindi",
      "Japanese",
      "Korean",
      "Chinese",
    ],
  },
  {
    id: "releaseYear",
    label: "Release Year",
    options: [
      "2026",
      "2025",
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2010–2019",
      "2000–2009",
      "1990–1999",
      "Before 1990",
    ],
  },
  {
    id: "quality",
    label: "Quality",
    options: ["4K Ultra HD", "Full HD (1080p)", "HD (720p)", "SD", "CAM"],
  },
  {
    id: "genres",
    label: "Genres",
    options: [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Crime",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Thriller",
      "War",
      "Documentary",
    ],
  },
];

// ======== Popular TV Series ========
export const PopularTvSeriesSection = {
  title: "Popular Now",
  description: "The most watched picks everyone is enjoying right now.",
};

export const PopularTv: MediaCardItem[] = [
  {
    id: 1,
    name: "Squid Game",
    img: "/TV/Popular/squid_game.webp",
    rate: "8.0",
    type: "tv",
    year: "2021",
    genre: "Thriller / Survival",
    duration: "3 Seasons",
    description:
      "Hundreds of desperate contestants risk their lives in deadly games for a prize that could change everything.",
    position: "center",
  },
  {
    id: 2,
    name: "Game of Thrones",
    img: "/TV/Popular/game_of_thronse.webp",
    rate: "9.2",
    type: "tv",
    year: "2011",
    genre: "Fantasy / Drama",
    duration: "8 Seasons",
    description:
      "Noble families battle for power in Westeros while ancient threats rise beyond the Wall.",
    position: "top",
  },
  {
    id: 3,
    name: "From",
    img: "/TV/Popular/form.webp",
    rate: "7.8",
    type: "tv",
    year: "2022",
    genre: "Horror / Mystery",
    duration: "3 Seasons",
    description:
      "Residents of a nightmarish town struggle to survive as escape becomes impossible and the forest grows more dangerous.",
    position: "center",
  },
  {
    id: 4,
    name: "Peaky Blinders",
    img: "/TV/Popular/becky_blinders.jpg",
    rate: "8.7",
    type: "tv",
    year: "2013",
    genre: "Crime / Drama",
    duration: "6 Seasons",
    description:
      "Tommy Shelby leads a ruthless Birmingham gang through ambition, politics, and war in post-World War I England.",
    position: "top",
  },
  {
    id: 5,
    name: "La Casa de Papel",
    img: "/TV/Popular/la-casa-de-papel.webp",
    rate: "8.2",
    type: "tv",
    year: "2017",
    genre: "Crime / Thriller",
    duration: "5 Parts",
    description:
      "A criminal mastermind recruits a team of specialists to carry out one of the most ambitious robberies ever attempted.",
    position: "bottom",
  },
];

// ============ Trending Section ============
export const TrendingSection = {
  title: "Trending",
  description: "What’s blowing up today — fresh buzz, big momentum.",
};

export const TrendingTvSeries: MediaCardItem[] = [
  {
    id: 1,
    name: "Stranger Things",
    img: "/TV/Popular/stranger_things_i.webp",
    rate: "8.6",
    type: "tv",
    year: "2016",
    genre: "Sci-Fi / Horror",
    duration: "5 Seasons",
    description:
      "A group of friends in Hawkins face terrifying creatures, secret labs, and a dark parallel world called the Upside Down.",
    position: "center",
  },
  {
    id: 2,
    name: "Vikings",
    img: "/TV/Popular/vikings.webp",
    rate: "8.5",
    type: "tv",
    year: "2013",
    genre: "Action / Historical Drama",
    duration: "6 Seasons",
    description:
      "Ragnar Lothbrok rises from farmer to legend as he leads daring raids and shapes the fate of the Norse world.",
    position: "top",
  },
  {
    id: 3,
    name: "Squid Game",
    img: "/TV/Popular/squid_game.webp",
    rate: "8.0",
    type: "tv",
    year: "2021",
    genre: "Thriller / Survival",
    duration: "3 Seasons",
    description:
      "Contestants trapped by debt are pulled into a cruel competition where childhood games turn deadly.",
    position: "center",
  },
  {
    id: 4,
    name: "From",
    img: "/TV/Popular/form.webp",
    rate: "7.8",
    type: "tv",
    year: "2022",
    genre: "Horror / Mystery",
    duration: "3 Seasons",
    description:
      "A trapped community fights to survive as terrifying creatures emerge at night and secrets deepen.",
    position: "center",
  },
];

// ============ Top Rated Section ============
export const TopRatedSection = {
  title: "Top Rated",
  description: "Critically acclaimed favorites with the highest ratings.",
};

export const TopRatedTvSeries: MediaCardItem[] = [
  {
    id: 1,
    name: "Breaking Bad",
    img: "/TV/Hero/breaking_bad.png",
    rate: "9.5",
    type: "tv",
    year: "2008",
    genre: "Crime / Drama",
    duration: "5 Seasons",
    description:
      "Walter White’s desperate decision to produce meth transforms him from a struggling teacher into a feared criminal force.",
    position: "center",
  },
  {
    id: 2,
    name: "Game of Thrones",
    img: "/TV/Popular/game_of_thronse.webp",
    rate: "9.2",
    type: "tv",
    year: "2011",
    genre: "Fantasy / Drama",
    duration: "8 Seasons",
    description:
      "Political betrayal, war, dragons, and prophecy collide as rival houses fight for the Iron Throne.",
    position: "top",
  },
  {
    id: 3,
    name: "Peaky Blinders",
    img: "/TV/Popular/becky_blinders.jpg",
    rate: "8.7",
    type: "tv",
    year: "2013",
    genre: "Crime / Drama",
    duration: "6 Seasons",
    description:
      "The Shelby family expands its empire through violence, strategy, and dangerous alliances.",
    position: "top",
  },
  {
    id: 4,
    name: "Stranger Things",
    img: "/TV/Popular/stranger_things_i.webp",
    rate: "8.6",
    type: "tv",
    year: "2016",
    genre: "Sci-Fi / Horror",
    duration: "5 Seasons",
    description:
      "Friendship and courage are tested as Hawkins becomes the center of a supernatural war.",
    position: "center",
  },
];

// ============ New Releases Section ============
export const NewReleasesSection = {
  title: "New Releases",
  description: "Just dropped — discover the latest series added to PlayVibe.",
};

export const NewReleasesTvSeries: MediaCardItem[] = [
  {
    id: 1,
    name: "Squid Game",
    img: "/TV/Popular/squid_game.webp",
    rate: "8.0",
    type: "tv",
    year: "2021",
    genre: "Thriller / Survival",
    duration: "3 Seasons",
    description:
      "The global survival phenomenon returns with more brutal games, deeper stakes, and sharper emotional tension.",
    position: "center",
  },
  {
    id: 2,
    name: "From",
    img: "/TV/Popular/form.webp",
    rate: "7.8",
    type: "tv",
    year: "2022",
    genre: "Horror / Mystery",
    duration: "3 Seasons",
    description:
      "Each new chapter reveals more of the town’s haunting rules while the residents edge closer to collapse.",
    position: "center",
  },
  {
    id: 3,
    name: "Stranger Things",
    img: "/TV/Popular/stranger_things_i.webp",
    rate: "8.6",
    type: "tv",
    year: "2016",
    genre: "Sci-Fi / Horror",
    duration: "5 Seasons",
    description:
      "The story of Hawkins grows darker as the final battles against the Upside Down draw near.",
    position: "top",
  },
  {
    id: 4,
    name: "Vikings",
    img: "/TV/Popular/vikings.webp",
    rate: "8.5",
    type: "tv",
    year: "2013",
    genre: "Action / Historical Drama",
    duration: "6 Seasons",
    description:
      "A sweeping saga of raids, kingship, betrayal, and destiny across Scandinavia and beyond.",
    position: "top",
  },
];
