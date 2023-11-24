import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { User } from 'src/app/core/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  user = new User();



  constructor(
    private userService: UserService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private title: Title

  ){}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de Usuário');
  }

  save(userForm: NgForm) {
    this.userService.add(this.user)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Usuário adicionado com sucesso!' });
        this.router.navigate(['/login']);
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
