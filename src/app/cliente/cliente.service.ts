import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteI } from './clienteI';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint
  apiURL = 'http://localhost:3000/users/';

  getClientes(document: string): any {
    return this._httpClient.get(this.apiURL + 'document/' + document);
  }

  deleteClientes(id: number): Observable<any> {
    return this._httpClient.delete(this.apiURL + id);
  }

  updateCliente(id: number, cliente: ClienteI): Observable<ClienteI> {
    return this._httpClient.patch<ClienteI>(this.apiURL + id, cliente);
  }
}
