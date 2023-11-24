import * as moment from 'moment';

export class User {
  id!: number;
  name!: string;
  email!: string;
  age!: number;
  password!: string;
  active = true;


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
