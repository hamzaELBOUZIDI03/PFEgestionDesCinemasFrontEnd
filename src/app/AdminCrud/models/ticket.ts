
import { place } from "./place";
import { projection } from "./projection";
export interface ticket{
  id:number,
  nomClient?:string,
  prix?:number,
  codePayement?:number,
  reservee?:boolean,
  place:place,
  projection:projection,


}





