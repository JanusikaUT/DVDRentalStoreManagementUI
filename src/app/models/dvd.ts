export interface Dvd {
  id?: number; // Make `id` optional for new DVDs
  title: string;
  genre: string;
  director: string;
  price?:number;
  releaseDate?: Date; // Optional for newly created DVDs
  copiesAvailable: number; // Optional for new entries
  imagePath?: string; // Optional to handle missing images
  imageUrl?:any;
}
