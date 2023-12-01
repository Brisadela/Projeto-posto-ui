import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostoHttpInterceptor } from './posto--http-interceptor';
import { AuthGuard } from './auth.guard';

export function tokenGetter(): any {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token', 'http://localhost:8080/users']
      }
    }),
    RouterModule,
  ],
  providers: [JwtHelperService, {
    provide: HTTP_INTERCEPTORS,
    useClass: PostoHttpInterceptor,
    multi: true
  }, AuthGuard
],
  exports: [LoginFormComponent]

})
export class SecurityModule { }
