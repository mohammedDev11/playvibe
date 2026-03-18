import { BsHeadsetVr, BsTwitterX } from "react-icons/bs";
import {
  FaApple,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTabletScreenButton,
  FaYoutube,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
  HiHome,
  HiFilm,
  HiTv,
  HiChartBar,
  HiBookmark,
  HiCreditCard,
  HiWrench,
} from "react-icons/hi2";
import { IoDesktopSharp, IoGameController } from "react-icons/io5";
import { MdLiveTv, MdOutlineSmartphone } from "react-icons/md";

export type NavItem = {
  label: string;
  href: string;
  icon: any;
};

export const MAIN_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: HiHome },
  { label: "Movies", href: "/movies", icon: HiFilm },
  { label: "TV Series", href: "/tv", icon: HiTv },
  { label: "Trending", href: "/trending", icon: HiChartBar },
  { label: "My List", href: "/my-list", icon: HiBookmark },
  { label: "Subscriptions", href: "/subscriptions", icon: HiCreditCard },
  { label: "Support", href: "/support", icon: HiWrench },
];

export const AUTH_PROVIDERS = [
  {
    id: "google",
    label: "Google",
    icon: FcGoogle,
    className: "hover:bg-white hover:text-black",
  },
  {
    id: "apple",
    label: "Apple",
    icon: FaApple,
    className: "hover:bg-black hover:text-white",
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: FaFacebook,
    className: "hover:bg-[#1877F2] hover:text-white",
  },
];

//============Home================
export const HomeTopNavbarContent = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "#explore" },
  { label: "About", href: "#about" },
  { label: "Questions", href: "#questions" },
  { label: "Plsn", href: "#plan" },
];

export const HomeHeroPremium = {
  title: "Feel Every Scene. Live Every Moment.",
  description:
    "PlayVibe brings movies and series to life. Discover blockbusters, classics, and trending shows — all in one place.",
  buttonText: "Start Watching",
};

export const HomeExploreSection = {
  title: "Explore our wide variety of categories",
  description:
    "Whether you’re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new",
};
// HomeExploreMovies

export type ExploreCategory = {
  id: number;
  title: string;
  href: string;
  poster: string; // single image
  featuredMovie: string; // movie to search for
};

export const HomeExploreCategories: ExploreCategory[] = [
  {
    id: 1,
    title: "Action",
    href: "/movies?genre=action",
    poster: "/posters/action.jpg",
    featuredMovie: "The Dark Knight",
  },
  {
    id: 2,
    title: "Adventure",
    href: "/movies?genre=adventure",
    poster: "/posters/adventure.jpg",
    featuredMovie: "The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    id: 3,
    title: "Comedy",
    href: "/movies?genre=comedy",
    poster: "/posters/comedy.jpg",
    featuredMovie: "The Grand Budapest Hotel",
  },
  {
    id: 4,
    title: "Drama",
    href: "/movies?genre=drama",
    poster: "/posters/drama.jpg",
    featuredMovie: "The Shawshank Redemption",
  },
  {
    id: 5,
    title: "Sci-Fi",
    href: "/movies?genre=scifi",
    poster: "/posters/scifi.jpg",
    featuredMovie: "Interstellar",
  },
  {
    id: 6,
    title: "Thriller",
    href: "/movies?genre=thriller",
    poster: "/posters/thriller.jpg",
    featuredMovie: "Se7en",
  },
  {
    id: 7,
    title: "Horror",
    href: "/movies?genre=horror",
    poster: "/posters/horror.jpg",
    featuredMovie: "The Conjuring",
  },
  {
    id: 8,
    title: "Animation",
    href: "/movies?genre=animation",
    poster: "/posters/animation.jpg",
    featuredMovie: "Spider-Man: Into the Spider-Verse",
  },
  {
    id: 9,
    title: "Romance",
    href: "/movies?genre=romance",
    poster: "/posters/romance.jpg",
    featuredMovie: "La La Land",
  },
  {
    id: 10,
    title: "Documentary",
    href: "/movies?genre=documentary",
    poster: "/posters/documentary.jpg",
    featuredMovie: "Planet Earth",
  },
];

// ----About-----
export const HomeAboutSection = {
  title: "Seamless Streaming on Every Screen.",
  description:
    "PlayVibe is built to move with you. Watch your favorite movies and series on smartphones, tablets, laptops, Smart TVs, consoles, and more — without interruptions, without limits.",
};

export type DeviceSupport = {
  id: number;
  title: string;
  description: string;
  icon: any;
};

export const PlayVibeDevices: DeviceSupport[] = [
  {
    id: 1,
    title: "Smartphones",
    description:
      "Watch anywhere with smooth playback and quick access on mobile. Perfect for short breaks or late-night scrolling.",
    icon: MdOutlineSmartphone,
  },
  {
    id: 2,
    title: "Tablets",
    description:
      "A bigger screen, the same vibe. Enjoy crisp visuals and comfortable viewing whether you’re at home or on the go.",
    icon: FaTabletScreenButton,
  },
  {
    id: 3,
    title: "Smart TV",
    description:
      "Bring the cinema to your living room. PlayVibe is made for big screens and immersive nights with friends or family.",
    icon: MdLiveTv,
  },
  {
    id: 4,
    title: "Laptops & Desktops",
    description:
      "Stream directly in your browser with a clean experience. Great for studying breaks, multitasking, or full-screen mode.",
    icon: IoDesktopSharp,
  },
  {
    id: 5,
    title: "Gaming Consoles",
    description:
      "Switch from gaming to streaming instantly. Get a console-ready experience built for smooth control and big-screen fun.",
    icon: IoGameController,
  },
  {
    id: 6,
    title: "VR Headsets",
    description:
      "Step closer to the story. Explore immersive viewing that feels more personal, more intense, and more real.",
    icon: BsHeadsetVr,
  },
];

// ---- Questions Section ----

export const HomeQuestionsSection = {
  title: "Frequently Asked Questions",
  description:
    "Have questions about PlayVibe? Find quick answers about streaming, subscriptions, devices, and everything in between.",
  buttonText: "Ask a Question",
};
export type FaqQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const HomeFaqQuestions1: FaqQuestion[] = [
  {
    id: 1,
    question: "What is PlayVibe?",
    answer:
      "PlayVibe is a modern streaming platform that lets you watch movies and series on demand across multiple devices with a smooth and premium experience.",
  },
  {
    id: 2,
    question: "How much does PlayVibe cost?",
    answer:
      "PlayVibe offers flexible subscription plans designed to fit different viewing needs. You can choose a plan that matches your streaming habits.",
  },
  {
    id: 3,
    question: "What content is available on PlayVibe?",
    answer:
      "PlayVibe features action, drama, comedy, sci-fi, documentaries, animation, and more — including trending releases and timeless classics.",
  },
  {
    id: 4,
    question: "How can I watch PlayVibe?",
    answer:
      "You can stream directly from your browser or use PlayVibe on smartphones, tablets, Smart TVs, laptops, consoles, and supported devices.",
  },
];

export const HomeFaqQuestions2: FaqQuestion[] = [
  {
    id: 5,
    question: "How do I sign up for PlayVibe?",
    answer:
      "Simply create an account, choose your subscription plan, and start streaming instantly — no complicated setup required.",
  },
  {
    id: 6,
    question: "Is there a free trial?",
    answer:
      "PlayVibe may offer promotional trials for new users so you can explore the platform before committing to a subscription.",
  },
  {
    id: 7,
    question: "How do I contact support?",
    answer:
      "You can reach our support team through the Support section. We’re here to help with account, billing, or streaming issues.",
  },
  {
    id: 8,
    question: "What payment methods are accepted?",
    answer:
      "PlayVibe supports major credit and debit cards along with selected digital payment options depending on your region.",
  },
];

// ---- Plan Section ----
export const HomePlanSection = {
  title: "Choose the Plan That’s Right for You",
  description:
    "Join PlayVibe and select from our flexible subscription plans tailored to your viewing style. Enjoy seamless streaming, exclusive content, and non-stop entertainment across all your devices.",
};
export type Plan = {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string[];
  badge?: string;
};

export const HomePlans: Plan[] = [
  {
    id: 1,
    name: "Basic Plan",
    description:
      "Perfect for casual viewers who want access to essential movies and shows.",
    price: 9.99,
    features: [
      "Access to standard content library",
      "HD streaming (720p)",
      "Watch on 1 device at a time",
      "Limited new releases",
      "Cancel anytime",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    description:
      "Best value for everyday entertainment with more flexibility and quality.",
    price: 12.99,
    badge: "Most Popular",
    features: [
      "Full content library access",
      "Full HD streaming (1080p)",
      "Watch on 2 devices simultaneously",
      "Access to most new releases",
      "Priority customer support",
      "Cancel anytime",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    description:
      "Ultimate experience for true cinema lovers who want everything unlocked.",
    price: 14.99,
    features: [
      "All movies & exclusive originals",
      "Ultra HD & 4K streaming",
      "Watch on 4 devices simultaneously",
      "Offline downloads",
      "Early access to new releases",
      "Premium support access",
      "Cancel anytime",
    ],
  },
];

//-----contact------
export const HomeContactSection = {
  title: "Let’s Build Something Together",
  description:
    "Whether you're a user, investor, or partner, we’d love to hear from you. Reach out and connect with Matrix Youniverse.",
};

//===========Movies================

//===========Tv================

//==================Footer=================

export const FooterContent = {
  brand: {
    name: "YottaByte",
    tagline: "Building platforms that redefine digital experiences.",
  },

  description:
    "YottaByte is the technology company behind PlayVibe — a next-generation streaming platform designed to deliver seamless entertainment across every screen. We build immersive digital ecosystems that combine innovation, performance, and vision.",

  SocialLinks: [
    {
      id: 1,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-alshammasi-970374319/",
      icon: FaLinkedinIn,
      color: "#0A66C2", // LinkedIn blue
    },
    {
      id: 2,
      label: "Instagram",
      href: "#",
      icon: FaInstagram,
      color: "#E1306C", // Instagram pink
    },
    {
      id: 3,
      label: "X",
      href: "#",
      icon: BsTwitterX,
      color: "#000000", // X black
    },
    {
      id: 4,
      label: "Facebook",
      href: "#",
      icon: FaFacebookF,
      color: "#1877F2", // Facebook blue
    },
    {
      id: 5,
      label: "YouTube",
      href: "#",
      icon: FaYoutube,
      color: "#FF0000", // YouTube red
    },
  ],

  sections: [
    {
      title: "Our Platform",
      links: [
        { label: "PlayVibe", href: "/" },
        { label: "Subscriptions", href: "/subscriptions" },
        { label: "Plans & Pricing", href: "#plans" },
        { label: "FAQ", href: "#questions" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About YottaByte", href: "#about" },
        { label: "Our Vision", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookies Policy", href: "#" },
      ],
    },
  ],

  bottomText:
    "© 2026 YottaByte. PlayVibe is a product of YottaByte. All rights reserved.",
};
