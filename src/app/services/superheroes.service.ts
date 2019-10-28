import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  public baseUrl: string = 'http://localhost:8888/api/';

  constructor(private httpClient: HttpClient) { }

  public list(query?: string): Promise<any> {
    let url = this.baseUrl + 'superheroes';

    if( query !== '' )
    {
      url = url + '?name=' + query;
    }

    return this.httpClient.get(url).toPromise();
  }
  public show(id: string): Promise<any> {
    const url = this.baseUrl + 'superheroes/' + id;

    return this.httpClient.get(url).toPromise();
  }

  public update(id: string, payload) {
    const url = this.baseUrl + 'superheroes/' + id;

    return this.httpClient.put(url, payload).toPromise();
  }
}
