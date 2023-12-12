import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { Cliente, User  } from '../core/model';
import { DatePipe } from '@angular/common';

import * as moment from 'moment';

export class  ClienteFilter {
  user?: any;
  nome?: string;
  documento?: string;
  page = 0;
  itensPerPage = 2;

}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURLUrl = 'http://localhost:8080/cliente';
  email: any;

  constructor(private http: HttpClient,
              private auth: AuthService,
              private datePipe: DatePipe) { }

search(filter: ClienteFilter): Promise<any> {
        const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

          let params = new HttpParams()
            .set('page', filter.page.toString())
            .set('size', filter.itensPerPage.toString());



                if (filter.nome) {
                  params = params.set('nome', filter.nome);
                }
                if (filter.documento) {
                  params = params.set('docuemnto', filter.documento);
                }



                return this.http.get(`${this.clienteURLUrl}?resumo`, { headers, params })
                .toPromise()
                .then((response: any) => {
                  const clientes = response['content'];

                  const result = {
                    clientes,
                    total: response['totalElements']
                  };

                  return result;
                });
              }

listByUser(): Promise<any> {
          this.email = this.auth.jwtPayload?.user_name;
          return this.http.get(`${this.clienteURLUrl}`)
          .toPromise()
           .then(response => {
                    return response;
                  });
  }

  add(cliente: Cliente): Promise<Cliente> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.clienteURLUrl, Cliente.toJson(cliente), { headers })
      .toPromise();
  }

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.clienteURLUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  update(cliente: Cliente): Promise<Cliente> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Cliente>(`${this.clienteURLUrl}/${cliente.id}`, Cliente.toJson(cliente), { headers })
      .toPromise()
      .then((response: any) => {
        const updated = response;

        //this.stringToDate(updated);

        return updated;
      });
    }

    findById(id: number): Promise<Cliente> {
      return this.http.get<Cliente>(`${this.clienteURLUrl}/${id}`)
        .toPromise()
        .then((response: any) => {
          const cliente = response;

          //this.stringToDate(cliente);

          return cliente;
        });
    }


}
