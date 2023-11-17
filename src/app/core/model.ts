import * as moment from 'moment';

export class User {
  id!: number;

  constructor(){
    this.id = 1;
  }
}

export class Cliente {
  id!: number;
  nome!: string;
  documento!: string;



  static toJson(cliente: Cliente): any {
    return {
      id: cliente.id,
      nome: cliente.nome,
      documento:cliente.documento,


    }
  }
}
