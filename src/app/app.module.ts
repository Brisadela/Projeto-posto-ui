import { CoreModule } from './core/core.module';
import { SecurityModule } from './security/security.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './security/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    SecurityModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UsersModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
