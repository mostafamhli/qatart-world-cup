import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../model/root-object';


const headers= new HttpHeaders()
.set('X-Auth-Token','6eee5a803dd94424b2be9079cc1b9fbd');

@Injectable({
  providedIn: 'root'
})

export class MatchesService {

  constructor(private http: HttpClient) { }

  getComData():Observable<RootObject> {
    console.log(headers)
    return this.http.get<RootObject>('/standings',{ 'headers': headers });
  }

  getTodatMatches(dateFrom:string,dateTo:string):Observable<RootObject> {
    const options = {
      dateFrom: dateFrom,
      dateTo: dateTo
    };

    return this.http.get<RootObject>('/matches',{headers:headers, params:options})
  }

}
