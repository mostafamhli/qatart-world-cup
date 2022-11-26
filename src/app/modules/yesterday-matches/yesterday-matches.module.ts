import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { YesterdayMatchesComponent } from './yesterday-matches.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { YesterdayRoutingModule } from './yesterday-routing.module';


@NgModule({
  declarations: [
    YesterdayMatchesComponent
  ],
  imports: [
    CommonModule,
    YesterdayRoutingModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  exports:[
    YesterdayMatchesComponent
  ]
})
export class YesterdayMatchesModule { }
