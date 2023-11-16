import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../security/auth.service';
import { ClienteService } from '../clientes/cliente.service';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ClienteService
  ],
  exports:[
    NavbarComponent
  ],

})
export class CoreModule { }
