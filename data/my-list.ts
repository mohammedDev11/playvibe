import type { MediaCardItem } from "@/data/media";

export const MyListContent = [{ label: "", href: "#" }];

export const MyListSection = {
  title: "My List",
  description: "Your saved movies and series — continue watching anytime.",
};

export const MyListItems: MediaCardItem[] = [
  {
    id: 1,
    name: "Gladiator",
    img: "/Movies/Popular/gladiator.webp",
    rate: "8.5",
    type: "movie",
    year: "2024",
    genre: "Action / Drama",
    duration: "2h 35m",
    description:
      "A betrayed Roman general is forced into slavery and rises through the arena to seek justice against a corrupt emperor.",
    position: "top",
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
    name: "Breaking Bad",
    img: "/TV/Hero/breaking_bad.png",
    rate: "9.5",
    type: "tv",
    year: "2008",
    genre: "Crime / Drama",
    duration: "5 Seasons",
    description:
      "A chemistry teacher turned drug kingpin builds a dangerous empire.",
    position: "center",
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
      "A group of kids uncover a supernatural mystery in their small town.",
    position: "top",
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
    name: "Peaky Blinders",
    img: "/TV/Popular/becky_blinders.jpg",
    rate: "8.7",
    type: "tv",
    year: "2013",
    genre: "Crime / Drama",
    duration: "6 Seasons",
    description:
      "A powerful gang rises in post-war England under the leadership of Tommy Shelby.",
    position: "top",
  },
];
