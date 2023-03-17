import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteFormI } from '../cliente-form/clienteFormI';
import { ContatoI } from './contatoI';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint/
  apiURL = 'http://localhost:3000/contacts';

  createCliente(contato: ContatoI) {
    return this._httpClient.post(this.apiURL, contato).subscribe();
  }
}
