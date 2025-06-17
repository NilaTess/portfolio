import { Tag } from "./tag";

export interface Information {
    title : string,
    languages? : Tag[],
    details : string,
    description? : string
}