import { Information } from "./Information";
import { SckoolSkillSection } from "./SchoolSkill";

export interface Project {
    slug : string,
    information : Information,
    urlImage : string,
    description : string,
    skillsSection : SckoolSkillSection[],
    images : string[]
}