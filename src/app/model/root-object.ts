import { Area } from "./area";
import { Competition } from "./competition";
import { Filters } from "./filters";
import { Match } from "./match";
import { Season } from "./season";
import { Standing } from "./standing";

export interface RootObject {
    filters: Filters;
    area: Area;
    competition: Competition;
    season: Season;
    standings: Standing[];
    matches: Match[];
}