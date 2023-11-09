import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    ClientesListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    ClientesListComponent
  ]

})
export class ClientesModule { }
