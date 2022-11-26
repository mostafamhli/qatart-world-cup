import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GroupRoutingModule } from './groups/groups-routing.module';


@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  exports:[
    GroupsComponent
  ]
})
export class GroupsModule { }
