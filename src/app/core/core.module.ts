import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule , registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AuthService } from '../security/auth.service';
import { ClienteService } from '../clientes/cliente.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { Title } from '@angular/platform-browser';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService,
    ClienteService,
    ErrorHandlerService,
    MessageService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    Title
  ],


})
export class CoreModule { }
