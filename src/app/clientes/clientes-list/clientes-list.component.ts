import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent {



  clientes = [];

  constructor(private clienteService: ClienteService){ }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.clienteService.list()
      .then(result => {
        this.clientes = result;
      });
  }
}


