export type EventItem = {
  _id?: string;
  name: string;
  image: string; // URL to the image
  date: string; // ISO date string
  link?: string; // optional ticket link
};