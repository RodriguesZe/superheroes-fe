import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  constructor(private httpClient: HttpClient) { }

  public list(query?: string): Promise<any> {
    let url = 'http://localhost:8888/api/superheroes';

    if( query !== '' )
    {
      url = url + '?name=' + query;
    }

    return this.httpClient.get(url).toPromise();
  }

  public show(id: string): Promise<any> {
    const url = 'http://localhost:8888/api/superheroes/' + id;

    return this.httpClient.get(url).toPromise();
  }
}
