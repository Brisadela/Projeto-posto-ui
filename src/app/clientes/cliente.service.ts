import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURLUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  list(): Promise<any> {
    return this.http.get(`${this.clienteURLUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
