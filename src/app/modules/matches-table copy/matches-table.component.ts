import { Component } from '@angular/core';
import * as moment from 'moment';
import { Match } from 'src/app/model/match';
import { RootObject } from 'src/app/model/root-object';
import { MatchesService } from '../../services/matches.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent {

  todayMatches : Match[] = [];
  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    let todayDate = (moment(new Date())).format('YYYY-MM-DD');
    this.matchesService.getTodatMatches(todayDate, todayDate).subscribe((res: RootObject) => {
      this.todayMatches=res.matches;
      
    })
  }

  match(index:any, item:Match){
    return item.id; 
 }
}
