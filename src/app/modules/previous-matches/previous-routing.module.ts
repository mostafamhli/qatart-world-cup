import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviousMatchesComponent } from './previous-matches.component';


const routes: Routes = [
{ path: '', component: PreviousMatchesComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreviousRoutingModule { }