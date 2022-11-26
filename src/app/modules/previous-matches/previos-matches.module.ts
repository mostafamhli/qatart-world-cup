import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PreviousMatchesComponent } from './previous-matches.component';
import { PreviousRoutingModule } from './previous-routing.module';


@NgModule({
  declarations: [
    PreviousMatchesComponent
  ],
  imports: [
    CommonModule,
    PreviousRoutingModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  exports:[
    PreviousMatchesComponent
  ]
})
export class PreviosMatchesModule { }
