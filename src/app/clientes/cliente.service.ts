import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { Cliente } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURLUrl = 'http://localhost:8080/clientes';
  email: any;

  constructor(private http: HttpClient,
              private auth: AuthService) { }

listByUser(): Promise<any> {
          this.email = this.auth.jwtPayload?.user_name;
          return this.http.get(`${this.clienteURLUrl}/user/${this.email}`)
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
}
