import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuncionarioFormI } from './funcionarioFormI';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioFormService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint/
  apiURL = 'http://localhost:3000/drivers';

  createFuncionario(funcionario: FuncionarioFormI) {
    return this._httpClient.post(this.apiURL, funcionario).subscribe();
  }
}
