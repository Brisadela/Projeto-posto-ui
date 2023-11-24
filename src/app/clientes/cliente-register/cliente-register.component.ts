import { Cliente } from './../../core/model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cliente-register',
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.css']
})
export class ClienteRegisterComponent {

  cliente = new Cliente();




  constructor(private clienteService: ClienteService, private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title){}

    ngOnInit(): void {
      const id = this.route.snapshot.params[`id`];
      if(id != 'new'){
        this.loadCliente(id);
      }
      this.title.setTitle('Cadastro de Clientes');// aqui!
    }
    get editing(): boolean {
      return Boolean(this.cliente.id);
    }

    loadCliente(id: number) {
      this.clienteService.findById(id)
        .then(cliente => {
          this.cliente = cliente;
        })
        .catch(error => this.errorHandler.handle(error));
    }


    save(clienteForm: NgForm){
      if(this.editing){
        this.updateCliente(clienteForm);
      }else{
        this.addCliente(clienteForm);
      }
    }

    updateCliente(clienteForm: NgForm) {
      this.clienteService.update(this.cliente)
        .then( cliente => {
          this.messageService.add({ severity: 'success', detail: 'Cliente editada com sucesso!' });
          this.cliente = cliente;
        })
        .catch(error => this.errorHandler.handle(error));
    }



    addCliente(clienteForm: NgForm) {
      this.clienteService.add(this.cliente)
        .then(addedCliente => {
          this.messageService.add({ severity: 'success', detail: 'Cliente adicionada com sucesso!' });
    this.loadCliente(addedCliente.id);
          this.router.navigate(['/clientes', addedCliente.id]);
        })
        .catch(error => this.errorHandler.handle(error));
    }

    new(clienteForm: NgForm){
      this.cliente = new Cliente(); //this.cliente = new Cliente(this.auth.jwtPayload?.user_id);
      clienteForm.reset();
      this.router.navigate(['/clientes/new']);
    }



}
