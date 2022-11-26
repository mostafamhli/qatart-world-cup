import { Component } from '@angular/core';
import { RootObject } from 'src/app/model/root-object';
import { Standing } from 'src/app/model/standing';
import { Table } from 'src/app/model/table';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  standings: Standing[] = [];

  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.matchesService.getComData().subscribe((res: RootObject) => {
      this.standings = res.standings
    })
  }

  standing(index:number, item:Standing){
    return item.group; 
 }

 teams(index:number, item:Table){
  return item.playedGames; 
}
}
