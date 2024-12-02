export interface Dvd {
  id?: number; // Make `id` optional for new DVDs
  title: string;
  genre: string;
  director: string;
  releaseDate?: string; // Optional for newly created DVDs
  availableCopies?: number; // Optional for new entries
  image?: string; // Optional to handle missing images

}
