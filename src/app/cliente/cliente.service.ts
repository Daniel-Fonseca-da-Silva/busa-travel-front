import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint
  apiURL = 'http://localhost:3000/users/';

  getClientes(document: string): any {
    return this._httpClient.get(this.apiURL + document);
  }
}