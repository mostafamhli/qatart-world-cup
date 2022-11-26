import { Component } from '@angular/core';
import * as moment from 'moment';
import { Match } from 'src/app/model/match';
import { RootObject } from 'src/app/model/root-object';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-previous-matches',
  templateUrl: './previous-matches.component.html',
  styleUrls: ['./previous-matches.component.css']
})
export class PreviousMatchesComponent {
  previousMatches: Match[] = [];
  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    let yesterday = moment().format('YYYY-MM-DD')
    this.matchesService.getTodatMatches('2022-11-20', yesterday).subscribe((res: RootObject) => {
      this.previousMatches = res.matches.reverse().filter((item: any) => {
        return item.status === 'FINISHED'
      });
    })
  }

  match(index: number, item: Match) {
    return item.id;
  }
}
