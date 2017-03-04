import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Player } from '../_model/player';

@Injectable()
export class DailyLeadersService {

  private baseUrl: string = 'http://stats.nba.com/stats';

  constructor(private http: Http) { }

  getPlayers(): Observable<Player[]> {

    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Access-Control-Request-Headers', '');

    let params: URLSearchParams = new URLSearchParams();
    params.set('Conter', '1000');
    params.set('DateFrom', '03/02/2017');
    params.set('DateTo', '03/02/2017');
    params.set('Direction', 'DESC');
    params.set('LeagueID', '00');
    params.set('PlayerOrTeam', 'P');
    params.set('Season', '2016-17');
    params.set('SeasonType', 'Regular Season');
    params.set('Sorter', 'DATE');

    let requestOptions = new RequestOptions();
    requestOptions.headers = headers;
    requestOptions.search = params;

    return this.http.get(`${this.baseUrl}/leaguegamelog`, requestOptions)
      .map(this.extractData);
      //.catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body.resultSets[0].rowSet);
    return body.resultSets[0].rowSet || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error("ERROR!" + errMsg);
    return Observable.throw(errMsg);
  }

}
