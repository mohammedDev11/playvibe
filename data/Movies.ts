import type { MediaCardItem } from "@/data/media";
import { FaPlay } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

export const MoviesTopNavbarContent = [
  { label: "Popular", href: "#popular" },
  { label: "Trending", href: "#trending" },
  { label: "Top Rated", href: "#top-rated" },
  { label: "New Releases", href: "#new-releases" },
];

export const HeroContent = {
  movies: [
    {
      title: "Inception",
      description:
        "A skilled thief enters layered dream worlds to plant an idea so deeply that reality itself becomes uncertain.",
      heroImage: "/Movies/Hero/hero.avif",
    },
    {
      title: "The Dark Knight",
      description:
        "Batman faces the Joker, a ruthless criminal mastermind who pushes Gotham into fear, chaos, and moral collapse.",
      heroImage: "/Movies/Hero/dark-night.jpg",
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travels through a wormhole to search for a future where humanity can survive beyond Earth.",
      heroImage: "/Movies/Hero/intersteller.webp",
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
export const MOVIE_FILTERS = [
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

// ======== Popular Movies ========
export const PopularMoviesSection = {
  title: "Popular Now",
  description: "The most watched picks everyone is enjoying right now.",
};

export const PopularMovies: MediaCardItem[] = [
  {
    id: 1,
    name: "F1: The Movie",
    img: "/Movies/Popular/F1.webp",
    rate: "7.6",
    type: "movie",
    year: "2025",
    genre: "Sport / Drama",
    duration: "2h 35m",
    description:
      "A veteran Formula One driver returns to the track to mentor a rising talent and chase one last shot at glory.",
    position: "center",
  },
  {
    id: 2,
    name: "One Battle After Another",
    img: "/Movies/Popular/one_battle_after_another.webp",
    rate: "7.7",
    type: "movie",
    year: "2025",
    genre: "Drama / Thriller",
    duration: "2h 41m",
    description:
      "When an old enemy resurfaces, a fractured group is pulled into a tense and deeply personal fight for survival.",
    position: "center",
  },
  {
    id: 3,
    name: "Ballerina",
    img: "/Movies/Popular/ballerina.webp",
    rate: "6.8",
    type: "movie",
    year: "2025",
    genre: "Action / Thriller",
    duration: "2h 4m",
    description:
      "A deadly assassin trained in the traditions of the Ruska Roma begins a violent path of revenge after her father's death.",
    position: "center",
  },
  {
    id: 4,
    name: "Sinners",
    img: "/Movies/Popular/sinners.webp",
    rate: "7.5",
    type: "movie",
    year: "2025",
    genre: "Horror / Drama",
    duration: "2h 17m",
    description:
      "Two brothers trying to leave their troubled past behind return home and find an even darker evil waiting for them.",
    position: "top",
  },
  {
    id: 5,
    name: "Gladiator",
    img: "/Movies/Popular/gladiator.webp",
    rate: "8.5",
    type: "movie",
    year: "2000",
    genre: "Action / Drama",
    duration: "2h 35m",
    description:
      "A betrayed Roman general is forced into slavery and rises through the arena to seek justice against a corrupt emperor.",
    position: "top",
  },
  {
    id: 6,
    name: "John Wick: Chapter 2",
    img: "/Movies/Popular/john_wick.webp",
    rate: "7.4",
    type: "movie",
    year: "2017",
    genre: "Action / Crime",
    duration: "2h 2m",
    description:
      "John Wick is drawn back into the assassin underworld and must face deadly rivals across Rome and New York.",
    position: "center",
  },
  {
    id: 7,
    name: "Bad Boys: Ride or Die",
    img: "/Movies/Popular/bad_boys.webp",
    rate: "6.5",
    type: "movie",
    year: "2024",
    genre: "Action / Comedy",
    duration: "1h 55m",
    description:
      "Mike and Marcus go on the run to clear their names while delivering another loud, chaotic mission in Miami.",
    position: "top",
  },
  {
    id: 8,
    name: "Frankenstein",
    img: "/Movies/Popular/frankenstein.webp",
    rate: "7.4",
    type: "movie",
    year: "2025",
    genre: "Horror / Drama",
    duration: "2h 29m",
    description:
      "A brilliant but arrogant scientist creates life and unleashes a tragic chain of obsession, fear, and revenge.",
    position: "center",
  },
];

// ============ Trending Section ============
export const TrendingSection = {
  title: "Trending",
  description: "What’s blowing up today — fresh buzz, big momentum.",
};

export const TrendingMovies: MediaCardItem[] = [
  {
    id: 1,
    name: "Gladiator",
    img: "/Movies/Popular/gladiator.webp",
    rate: "8.5",
    type: "movie",
    year: "2000",
    genre: "Action / Drama",
    duration: "2h 35m",
    description:
      "A betrayed Roman general is forced into slavery and rises through the arena to seek justice against a corrupt emperor.",
    position: "top",
  },
  {
    id: 2,
    name: "John Wick: Chapter 2",
    img: "/Movies/Popular/john_wick.webp",
    rate: "7.4",
    type: "movie",
    year: "2017",
    genre: "Action / Crime",
    duration: "2h 2m",
    description:
      "John Wick is drawn back into the assassin underworld and must face deadly rivals across Rome and New York.",
    position: "center",
  },
  {
    id: 3,
    name: "Bad Boys: Ride or Die",
    img: "/Movies/Popular/bad_boys.webp",
    rate: "6.5",
    type: "movie",
    year: "2024",
    genre: "Action / Comedy",
    duration: "1h 55m",
    description:
      "Mike and Marcus go on the run to clear their names while delivering another loud, chaotic mission in Miami.",
    position: "top",
  },
  {
    id: 4,
    name: "Frankenstein",
    img: "/Movies/Popular/frankenstein.webp",
    rate: "7.4",
    type: "movie",
    year: "2025",
    genre: "Horror / Drama",
    duration: "2h 29m",
    description:
      "A brilliant but arrogant scientist creates life and unleashes a tragic chain of obsession, fear, and revenge.",
    position: "center",
  },
  {
    id: 5,
    name: "Avatar",
    img: "/Movies/Popular/fvatar.webp",
    rate: "7.9",
    type: "movie",
    year: "2009",
    genre: "Sci-Fi / Adventure",
    duration: "2h 42m",
    description:
      "A marine on Pandora becomes torn between the mission he was sent to complete and the world he begins to love.",
    position: "top",
  },
  {
    id: 6,
    name: "Superman",
    img: "/Movies/Popular/superman.webp",
    rate: "7.0",
    type: "movie",
    year: "2025",
    genre: "Superhero / Action",
    duration: "2h 9m",
    description:
      "Clark Kent struggles to balance his Kryptonian heritage, human upbringing, and the responsibility of being Superman.",
    position: "top",
  },
  {
    id: 7,
    name: "F1: The Movie",
    img: "/Movies/Popular/F1.webp",
    rate: "7.6",
    type: "movie",
    year: "2025",
    genre: "Sport / Drama",
    duration: "2h 35m",
    description:
      "A veteran Formula One driver returns to the track to mentor a rising talent and chase one last shot at glory.",
    position: "center",
  },
  {
    id: 8,
    name: "One Battle After Another",
    img: "/Movies/Popular/one_battle_after_another.webp",
    rate: "7.7",
    type: "movie",
    year: "2025",
    genre: "Drama / Thriller",
    duration: "2h 41m",
    description:
      "When an old enemy resurfaces, a fractured group is pulled into a tense and deeply personal fight for survival.",
    position: "center",
  },
  {
    id: 9,
    name: "Sinners",
    img: "/Movies/Popular/sinners.webp",
    rate: "7.5",
    type: "movie",
    year: "2025",
    genre: "Horror / Drama",
    duration: "2h 17m",
    description:
      "Two brothers trying to leave their troubled past behind return home and find an even darker evil waiting for them.",
    position: "top",
  },
  {
    id: 10,
    name: "Ballerina",
    img: "/Movies/Popular/ballerina.webp",
    rate: "6.8",
    type: "movie",
    year: "2025",
    genre: "Action / Thriller",
    duration: "2h 4m",
    description:
      "A deadly assassin trained in the traditions of the Ruska Roma begins a violent path of revenge after her father's death.",
    position: "center",
  },
];

// ============ Top Rated Section ============
export const TopRatedSection = {
  title: "Top Rated",
  description: "Critically acclaimed favorites with the highest ratings.",
};

export const TopRatedMovies: MediaCardItem[] = [
  {
    id: 1,
    name: "The Godfather",
    img: "/Movies/Popular/godfather.webp",
    rate: "9.2",
    type: "movie",
    year: "1972",
    genre: "Crime / Drama",
    duration: "2h 55m",
    description:
      "The aging patriarch of a powerful crime family transfers control of his empire to his reluctant son.",
    position: "bottom",
  },
  {
    id: 2,
    name: "Fight Club",
    img: "/Movies/Popular/fight_club.webp",
    rate: "8.8",
    type: "movie",
    year: "1999",
    genre: "Drama / Thriller",
    duration: "2h 19m",
    description:
      "An insomniac office worker forms a secret fight club with a charismatic stranger, and it grows into something far more dangerous.",
    position: "bottom",
  },
  {
    id: 3,
    name: "Troy",
    img: "/Movies/Popular/troy.webp",
    rate: "7.3",
    type: "movie",
    year: "2004",
    genre: "Action / War",
    duration: "2h 43m",
    description:
      "Ancient kingdoms go to war after Helen is taken to Troy, setting legendary warriors on a path to glory and tragedy.",
    position: "top",
  },
  {
    id: 4,
    name: "Scarface",
    img: "/Movies/Popular/scarface.webp",
    rate: "8.3",
    type: "movie",
    year: "1983",
    genre: "Crime / Drama",
    duration: "2h 50m",
    description:
      "A Cuban refugee rises through Miami’s drug world with ruthless ambition, only to be consumed by power and paranoia.",
    position: "top",
  },
  {
    id: 5,
    name: "Gladiator",
    img: "/Movies/Popular/gladiator.webp",
    rate: "8.5",
    type: "movie",
    year: "2000",
    genre: "Action / Drama",
    duration: "2h 35m",
    description:
      "A betrayed Roman general is forced into slavery and rises through the arena to seek justice against a corrupt emperor.",
    position: "top",
  },
  {
    id: 6,
    name: "John Wick: Chapter 2",
    img: "/Movies/Popular/john_wick.webp",
    rate: "7.4",
    type: "movie",
    year: "2017",
    genre: "Action / Crime",
    duration: "2h 2m",
    description:
      "John Wick is drawn back into the assassin underworld and must face deadly rivals across Rome and New York.",
    position: "center",
  },
  {
    id: 7,
    name: "Avatar",
    img: "/Movies/Popular/fvatar.webp",
    rate: "7.9",
    type: "movie",
    year: "2009",
    genre: "Sci-Fi / Adventure",
    duration: "2h 42m",
    description:
      "A marine on Pandora becomes torn between the mission he was sent to complete and the world he begins to love.",
    position: "top",
  },
  {
    id: 8,
    name: "Superman",
    img: "/Movies/Popular/superman.webp",
    rate: "7.0",
    type: "movie",
    year: "2025",
    genre: "Superhero / Action",
    duration: "2h 9m",
    description:
      "Clark Kent struggles to balance his Kryptonian heritage, human upbringing, and the responsibility of being Superman.",
    position: "center",
  },
];

// ============ New Releases Section ============
export const NewReleasesSection = {
  title: "New Releases",
  description: "Just dropped — discover the latest movies added to PlayVibe.",
};

export const NewReleasesMovies: MediaCardItem[] = [
  {
    id: 1,
    name: "Avatar",
    img: "/Movies/Popular/fvatar.webp",
    rate: "7.9",
    type: "movie",
    year: "2009",
    genre: "Sci-Fi / Adventure",
    duration: "2h 42m",
    description:
      "A marine on Pandora becomes torn between the mission he was sent to complete and the world he begins to love.",
    position: "top",
  },
  {
    id: 2,
    name: "Superman",
    img: "/Movies/Popular/superman.webp",
    rate: "7.0",
    type: "movie",
    year: "2025",
    genre: "Superhero / Action",
    duration: "2h 9m",
    description:
      "Clark Kent struggles to balance his Kryptonian heritage, human upbringing, and the responsibility of being Superman.",
    position: "top",
  },
  {
    id: 3,
    name: "F1: The Movie",
    img: "/Movies/Popular/F1.webp",
    rate: "7.6",
    type: "movie",
    year: "2025",
    genre: "Sport / Drama",
    duration: "2h 35m",
    description:
      "A veteran Formula One driver returns to the track to mentor a rising talent and chase one last shot at glory.",
    position: "center",
  },
  {
    id: 4,
    name: "One Battle After Another",
    img: "/Movies/Popular/one_battle_after_another.webp",
    rate: "7.7",
    type: "movie",
    year: "2025",
    genre: "Drama / Thriller",
    duration: "2h 41m",
    description:
      "When an old enemy resurfaces, a fractured group is pulled into a tense and deeply personal fight for survival.",
    position: "center",
  },
  {
    id: 5,
    name: "Ballerina",
    img: "/Movies/Popular/ballerina.webp",
    rate: "6.8",
    type: "movie",
    year: "2025",
    genre: "Action / Thriller",
    duration: "2h 4m",
    description:
      "A deadly assassin trained in the traditions of the Ruska Roma begins a violent path of revenge after her father's death.",
    position: "top",
  },
  {
    id: 6,
    name: "Sinners",
    img: "/Movies/Popular/sinners.webp",
    rate: "7.5",
    type: "movie",
    year: "2025",
    genre: "Horror / Drama",
    duration: "2h 17m",
    description:
      "Two brothers trying to leave their troubled past behind return home and find an even darker evil waiting for them.",
    position: "center",
  },
  {
    id: 7,
    name: "Frankenstein",
    img: "/Movies/Popular/frankenstein.webp",
    rate: "7.4",
    type: "movie",
    year: "2025",
    genre: "Horror / Drama",
    duration: "2h 29m",
    description:
      "A brilliant but arrogant scientist creates life and unleashes a tragic chain of obsession, fear, and revenge.",
    position: "top",
  },
  {
    id: 8,
    name: "Bad Boys: Ride or Die",
    img: "/Movies/Popular/bad_boys.webp",
    rate: "6.5",
    type: "movie",
    year: "2024",
    genre: "Action / Comedy",
    duration: "1h 55m",
    description:
      "Mike and Marcus go on the run to clear their names while delivering another loud, chaotic mission in Miami.",
    position: "center",
  },
];
