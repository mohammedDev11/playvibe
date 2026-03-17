export const SupportTopNavbarContent = [
  { label: "Message Us", href: "#" },
  { label: "Questions", href: "#questions" },
];

export const FormSection = {
  title: "Need Help? We're Here for You",
  description:
    "If you’re experiencing any issues or have questions about our platform, feel free to reach out. Our support team is ready to assist you.",
};

export type CountryOption = {
  name: string;
  iso2: string; // used by react-circle-flags (lowercase)
  dial: string;
};
export type PosterItem = {
  src: string;
  alt: string;
};

export const supportPosters: PosterItem[] = [
  { src: "/Movies/Popular/john_wick.webp", alt: "john wick" },
  { src: "/posters/action.jpg", alt: "Action" },
  { src: "/posters/action.jpg", alt: "Action" },
  { src: "/posters/adventure.jpg", alt: "Adventure" },
  { src: "/posters/animation.jpg", alt: "Animation" },
  { src: "/posters/comedy.jpg", alt: "Comedy" },
  { src: "/posters/documentary.jpg", alt: "Documentary" },
  { src: "/posters/drama.jpg", alt: "Drama" },
  { src: "/posters/horror.jpg", alt: "Horror" },
  { src: "/posters/romance.jpg", alt: "Romance" },
  { src: "/posters/scifi.jpg", alt: "Sci-Fi" },
  { src: "/posters/thriller.jpg", alt: "Thriller" },
];
