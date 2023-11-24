import { ClienteRegisterComponent } from './clientes/cliente-register/cliente-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: 'clientes/:id', component: ClienteRegisterComponent},
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/new', component: ClienteRegisterComponent },
  { path: 'users/new', component: UserRegisterComponent },
  { path: 'login', component: LoginFormComponent },


  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found'} // importante que seja a última rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
