import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YesterdayMatchesComponent } from './yesterday-matches.component';



const routes: Routes = [
{ path: '', component: YesterdayMatchesComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YesterdayRoutingModule { }