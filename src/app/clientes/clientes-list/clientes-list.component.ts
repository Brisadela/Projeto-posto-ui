import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService,LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { ClienteFilter, ClienteService } from '../cliente.service';
import { User } from 'src/app/core/model';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent {
  header = 'Posto-Ui';

  nome?: string;


  clientes = [];

  totalRecords: number = 0;

  filter = new ClienteFilter();

  constructor(private clienteService: ClienteService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService){ }


  ngOnInit(): void {
    this.title.setTitle('Listagem de Clientes');
    //this.list();
    this.search();
  }

  search(page: number = 0): void {
   //this.filter.user = new User().id = this.auth.jwtPayload?.user_id;
    this.filter.page = page;

    this.clienteService.search(this.filter)
      .then((result: any) => {
        this.clientes = result.clientes;
        this.totalRecords = result.total;
      })
      .catch(error => this.errorHandler.handle(error));

  }

  whenChangePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.search(page);
  }



 /* list(): void {
    this.clienteService.listByUser()
      .then(result => {
        this.clientes = result;
      })
      .catch(error => this.errorHandler.handle(error));
  }*/

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
        //this.list();
        this.search();
        this.messageService.add({ severity: 'success', detail: 'Cliente  excluído com sucesso!' });
      })
      .catch(error => this.errorHandler.handle(error));
    }
}


