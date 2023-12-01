import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent {
  header = 'Posto-Ui';


  clientes = [];

  constructor(private clienteService: ClienteService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService){ }


  ngOnInit(): void {
    this.title.setTitle('Listagem de Clintes');
    this.list();
  }

  list(): void {
    this.clienteService.listByUser()
      .then(result => {
        this.clientes = result;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(cliente: any): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remove(cliente);
      }
    });
  }

  remove(cliente: any): void {
    this.clienteService.remove(cliente.id)
      .then(() => {
        this.list();
        this.messageService.add({ severity: 'success', detail: 'Cliente  excluído com sucesso!' });
      })
      .catch(error => this.errorHandler.handle(error));
    }
}


