export type TrendingItemType = "movie" | "tv";

export type TrendingItem = {
  id: number;
  name: string;
  img: string;
  rate: string;
  type: TrendingItemType;
  year: string;
  genre: string;
  duration: string;
  position?: "top" | "center" | "bottom";
  description: string;
};

export const trendingPageItems: TrendingItem[] = [
  // Movies
  {
    id: 1,
    name: "Gladiator",
    img: "/Movies/Popular/gladiator.webp",
    rate: "6.5",
    type: "movie",
    year: "2000",
    genre: "Action",
    duration: "2h 35m",
    position: "top",
    description:
      "A former Roman general fights for honor, revenge, and freedom inside the empire’s brutal arena.",
  },
  {
    id: 2,
    name: "John Wick 2",
    img: "/Movies/Popular/john_wick.webp",
    rate: "7.4",
    type: "movie",
    year: "2017",
    genre: "Action",
    duration: "2h 2m",
    position: "center",
    description:
      "John Wick is forced back into the criminal underworld and faces deadly assassins across the globe.",
  },
  {
    id: 3,
    name: "Bad Boys",
    img: "/Movies/Popular/bad_boys.webp",
    rate: "6.5",
    type: "movie",
    year: "2024",
    genre: "Comedy / Action",
    duration: "1h 55m",
    position: "top",
    description:
      "Two detectives return for another explosive mission full of chaos, action, and sharp humor.",
  },
  {
    id: 4,
    name: "Frankenstein",
    img: "/Movies/Popular/frankenstein.webp",
    rate: "7.4",
    type: "movie",
    year: "2025",
    genre: "Horror",
    duration: "2h 1m",
    position: "center",
    description:
      "A dark retelling of the classic monster story, where science and obsession become terrifying.",
  },
  {
    id: 5,
    name: "Avatar",
    img: "/Movies/Popular/fvatar.webp",
    rate: "7.6",
    type: "movie",
    year: "2009",
    genre: "Sci-Fi",
    duration: "2h 42m",
    position: "top",
    description:
      "A marine enters the world of Pandora and becomes part of a conflict larger than himself.",
  },
  {
    id: 6,
    name: "Superman",
    img: "/Movies/Popular/superman.webp",
    rate: "7.6",
    type: "movie",
    year: "2025",
    genre: "Superhero",
    duration: "2h 10m",
    position: "top",
    description:
      "A new vision of Superman balancing hope, power, and responsibility in a changing world.",
  },
  {
    id: 7,
    name: "Formula One (F1)",
    img: "/Movies/Popular/F1.webp",
    rate: "7.6",
    type: "movie",
    year: "2025",
    genre: "Sport / Drama",
    duration: "2h 18m",
    position: "center",
    description:
      "A high-speed racing drama about pressure, ambition, and what it takes to stay ahead.",
  },
  {
    id: 8,
    name: "One Battle After Another",
    img: "/Movies/Popular/one_battle_after_another.webp",
    rate: "7.7",
    type: "movie",
    year: "2025",
    genre: "Drama",
    duration: "2h 5m",
    position: "center",
    description:
      "A story of conflict, survival, and emotional endurance told through powerful character moments.",
  },

  // TV Series
  {
    id: 9,
    name: "Stranger Things",
    img: "/TV/Popular/stranger_things_i.webp",
    rate: "8.7",
    type: "tv",
    year: "2016",
    genre: "Sci-Fi / Mystery",
    duration: "4 Seasons",
    position: "center",
    description:
      "A group of friends uncover supernatural secrets in their town after a mysterious disappearance.",
  },
  {
    id: 10,
    name: "Vikings",
    img: "/TV/Popular/vikings.webp",
    rate: "8.7",
    type: "tv",
    year: "2013",
    genre: "Historical / Action",
    duration: "6 Seasons",
    position: "top",
    description:
      "A legendary Norse warrior rises through battle, ambition, and destiny in a brutal world.",
  },
  {
    id: 11,
    name: "Squid Game",
    img: "/TV/Popular/squid_game.webp",
    rate: "7.9",
    type: "tv",
    year: "2021",
    genre: "Thriller",
    duration: "2 Seasons",
    position: "center",
    description:
      "Desperate contestants enter deadly games for a life-changing prize in this intense survival series.",
  },
  {
    id: 12,
    name: "Game of Thrones",
    img: "/TV/Popular/game_of_thronse.webp",
    rate: "9.2",
    type: "tv",
    year: "2011",
    genre: "Fantasy / Drama",
    duration: "8 Seasons",
    position: "top",
    description:
      "Noble families fight for power, survival, and the Iron Throne in a vast fantasy world.",
  },
  {
    id: 13,
    name: "From",
    img: "/TV/Popular/form.webp",
    rate: "7.8",
    type: "tv",
    year: "2022",
    genre: "Horror / Mystery",
    duration: "3 Seasons",
    position: "center",
    description:
      "Residents of a strange town struggle to survive as terrifying secrets trap them in place.",
  },
  {
    id: 14,
    name: "Peaky Blinders",
    img: "/TV/Popular/becky_blinders.jpg",
    rate: "8.7",
    type: "tv",
    year: "2013",
    genre: "Crime / Drama",
    duration: "6 Seasons",
    position: "top",
    description:
      "A dangerous gang rises in post-war Birmingham under the cold strategy of Tommy Shelby.",
  },
  {
    id: 15,
    name: "La Casa De Papel",
    img: "/TV/Popular/la-casa-de-papel.webp",
    rate: "8.2",
    type: "tv",
    year: "2017",
    genre: "Crime / Thriller",
    duration: "5 Parts",
    position: "bottom",
    description:
      "A mastermind gathers a team for an ambitious heist that turns into a global phenomenon.",
  },
];
