import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PARAM_REPOS, PARAM_USERS, URL_GITHUB } from '../global.constants';
import { GithubRepo } from '../models/github.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de repositorios públicos por usuarios
   *
   * @param user Usuario a consultar
   */
  getPublicRepositoriesByUser(user: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${URL_GITHUB}/${PARAM_USERS}/${user}/${PARAM_REPOS}`);
  }
}
