import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesTableComponent } from './modules/matches-table copy/matches-table.component';
import { GroupsComponent } from './modules/groups/groups/groups.component';

const routes: Routes = [
    {path:'today', loadChildren: () => import('./modules/matches-table copy/matches-table.module').then(m => m.MatchesTableModule)},
    {path:'yesterday',loadChildren: () => import('./modules/yesterday-matches/yesterday-matches.module').then(m => m.YesterdayMatchesModule)},
    {path:'previous', loadChildren: () => import('./modules/previous-matches/previos-matches.module').then(m => m.PreviosMatchesModule)},
    {path:'', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule)},
    {path:'**', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule)},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }