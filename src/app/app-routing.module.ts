import { ClienteRegisterComponent } from './clientes/cliente-register/cliente-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';

const routes: Routes = [
  { path: 'clientes/:id', component: ClienteRegisterComponent},
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/new', component: ClienteRegisterComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
