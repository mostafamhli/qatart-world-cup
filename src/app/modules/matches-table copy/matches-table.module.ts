import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesTableComponent } from './matches-table.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common'
import { TodayRoutingModule } from './today-routing.module';


@NgModule({
  declarations: [
    MatchesTableComponent
  ],
  imports: [
    CommonModule,
    TodayRoutingModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  exports:[
    MatchesTableComponent
  ]
})
export class MatchesTableModule { }
