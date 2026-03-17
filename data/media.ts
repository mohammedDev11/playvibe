export type MediaType = "movie" | "tv";

export type MediaCardItem = {
  id: string | number;
  name: string;
  img: string;
  rate: string | number;
  type: MediaType;
  year?: string;
  genre?: string;
  duration?: string;
  description?: string;
  position?: "top" | "center" | "bottom";
};
