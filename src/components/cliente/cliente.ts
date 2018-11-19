import { TestProvider } from './../../providers/test/test';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cliente',
  templateUrl: 'cliente.html'
})
export class ClienteComponent {
  public form: boolean;
  text: string;
  public resultados: any [] = [];
  public detail : any = {};

  constructor(
    private test: TestProvider
  ) {}

  crear(crearUsuario : NgForm){
    this.test.generalPost('/cliente')
      .then( data =>{
        this.resultados = data;
        console.log(this.resultados,"Post");
        
      })
  }

}
