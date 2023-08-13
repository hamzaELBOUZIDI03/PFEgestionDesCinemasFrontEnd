
import { categorieFilm } from "./categorieFilm";
export interface film {

  id:number,
  titre?:string,
  description?:string,
  realisateur?:string,
  dateSortie?:Date,
  duree?:number,
  photo?:string,
  categorieFilm:categorieFilm,

}


