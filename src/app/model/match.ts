import { Area } from "./area";
import { AwayTeam } from "./away-team";
import { Competition2 } from "./competition2";
import { HomeTeam } from "./home-team";
import { Odds } from "./odds";
import { Referee } from "./referee";
import { Score } from "./score";
import { Season } from "./season";

export interface Match {
    area: Area;
    competition: Competition2;
    season: Season;
    id: number;
    utcDate: Date;
    status: string;
    matchday: number;
    stage: string;
    group: string;
    lastUpdated: Date;
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
    score: Score;
    odds: Odds;
    referees: Referee[];
}