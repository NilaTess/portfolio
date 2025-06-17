import { Information } from "./Information";
import { SchoolSkill } from "./SchoolSkill";

export interface Project {
    slug : string,
    information : Information,
    urlImage : string,
    description : string,
    skills : SchoolSkill[],
    images : string[]
}