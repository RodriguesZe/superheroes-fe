import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  constructor(private httpClient: HttpClient) { }

  public list(query?: string): Promise<any> {
    return this.httpClient.get('http://localhost:8888/api/superheroes').toPromise();
  }

  public show(id: string): Promise<any> {
    const url = 'http://localhost:8888/api/superheroes/' + id;

    return this.httpClient.get(url).toPromise();
  }
}
