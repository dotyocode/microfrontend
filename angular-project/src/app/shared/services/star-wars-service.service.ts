import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../enviroments/api_star_wars/enviroments';

@Injectable({
  providedIn: 'root'
})
export class StarWarsServiceService {

  //constantes para reaproveitamento de rotas
  private path: any;
  private pathListarPlanetasId: any;

  constructor(private http: HttpClient) {
    this.path = environment.API_URL;
    this.pathListarPlanetasId = `${this.path}/planets`
  }

  getListaPlanetasComId(id: any): Observable<any> {
    return this.http.get<any>(`${this.pathListarPlanetasId}/${id}`);
  }

}
