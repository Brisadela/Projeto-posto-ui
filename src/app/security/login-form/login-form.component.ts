import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  jwtPayload: any;
  msg: any;

  constructor( private auth: AuthService, private router: Router) {

    this.jwtPayload = this.auth.jwtPayload;
  }

  login(user: string, password: string) {
    this.auth.login(user, password)
    .then(() => {
      this.router.navigate(['/clientes']);
    })
    .catch(() => {
      this.msg = 'Usuário e/ou senha inválida!';
    });
  }
}
