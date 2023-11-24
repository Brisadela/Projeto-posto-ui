import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor( private auth: AuthService, private router: Router, private title: Title) {

    this.jwtPayload = this.auth.jwtPayload;
  }

  ngOnInit(): void {
    this.title.setTitle('Login de Usuário');
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
