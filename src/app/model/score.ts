import { FullTime } from "./full-time";
import { HalfTime } from "./half-time";

export interface Score {
    winner: string;
    duration: string;
    fullTime: FullTime;
    halfTime: HalfTime;
}