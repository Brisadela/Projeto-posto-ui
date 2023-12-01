import { ClienteRegisterComponent } from './clientes/cliente-register/cliente-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [

  //{ path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'clientes/:id',
    component: ClienteRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_ACTIVITY']}
  },
  { path: 'clientes',
    component: ClientesListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_ACTIVITY']}
  },
  {
    path: 'clientes/new',
    component: ClienteRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_ACTIVITY']}
  },
  {
     path: 'users/new',
     component: UserRegisterComponent,
     
     },

  { path: 'login', component: LoginFormComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent }, // pagina-nao-encontrada
  { path: '**', redirectTo: 'page-not-found'} // importante que seja a última rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
