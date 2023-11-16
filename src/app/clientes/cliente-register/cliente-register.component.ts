import { Cliente } from './../../core/model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-register',
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.css']
})
export class ClienteRegisterComponent {

  cliente = new Cliente();
  constructor(private clienteService: ClienteService){}




  save(clienteForm: NgForm) {
    this.clienteService.add(this.cliente)
      .then(() => {
        console.log('Atividade adicionada com sucesso!');
        clienteForm.reset();
        this.cliente = new Cliente();
      })
      .catch(erro => console.log(erro));
  }

}
