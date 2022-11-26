import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { GroupsModule } from './modules/groups/groups.module';
import { MatchesTableModule } from './modules/matches-table copy/matches-table.module';
import { YesterdayMatchesModule } from './modules/yesterday-matches/yesterday-matches.module';
import { PreviosMatchesModule } from './modules/previous-matches/previos-matches.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    NgOptimizedImage,
    GroupsModule,
    MatchesTableModule,
    YesterdayMatchesModule,
    PreviosMatchesModule,
    TabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
