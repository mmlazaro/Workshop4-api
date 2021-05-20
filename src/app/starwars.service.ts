import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanetInterface } from './planet.interface';
import { ListInterface } from './list.interface';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

const API = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlanets(): Observable<PlanetInterface[]>{
    return this.httpClient.get<ListInterface<PlanetInterface>>(`${API}/planets`).pipe(
      map(list => list.results)
    );
  }


}


