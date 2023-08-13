import { film } from "./film";
import { salle } from "./salle";
import { seance } from "./seance";
export interface projection{
  id:number,
  dateProjection?:Date,
  prix?:number,
  salle:salle,
  film:film,
  seance:seance,

}



