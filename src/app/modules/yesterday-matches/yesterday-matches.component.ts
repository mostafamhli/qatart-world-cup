import { Component } from '@angular/core';
import * as moment from 'moment';
import { Match } from 'src/app/model/match';
import { RootObject } from 'src/app/model/root-object';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-yesterday-matches',
  templateUrl: './yesterday-matches.component.html',
  styleUrls: ['./yesterday-matches.component.css']
})
export class YesterdayMatchesComponent {
  yesterdayMatches : Match[] = [];
  
  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    this.matchesService.getTodatMatches(yesterday, yesterday).subscribe((res: RootObject) => {
      this.yesterdayMatches=res.matches;
      
    })
  }

  match(index:number, match:Match){
    return match.id; 
 }
}
