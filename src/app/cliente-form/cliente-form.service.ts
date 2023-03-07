import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteFormI } from './clienteFormI';

@Injectable({
  providedIn: 'root',
})
export class ClienteFormService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint/
  apiURL = 'http://localhost:3000/users';

  createCliente(cliente: ClienteFormI) {
    return this._httpClient.post(this.apiURL, cliente).subscribe();
  }
}
