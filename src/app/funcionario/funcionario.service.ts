import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioI } from './funcionarioI';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint
  apiURL = 'http://localhost:3000/drivers/';

  getFuncionario(document: string): any {
    return this._httpClient.get(this.apiURL + 'document/' + document);
  }

  deleteFuncionario(id: number): Observable<any> {
    return this._httpClient.delete(this.apiURL + id);
  }

  updateFuncionario(
    id: number,
    funcionario: FuncionarioI
  ): Observable<FuncionarioI> {
    return this._httpClient.patch<FuncionarioI>(this.apiURL + id, funcionario);
  }
}
