import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent {

  clientes = [
    { nome: 'jose', documento: '0000000000000' },
    { nome: 'joalise', documento: '0000000000000' },
    { nome: 'jose', documento: '0000000000000' },

  ];

}
