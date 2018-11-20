import { TestProvider } from './../../providers/test/test';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { invalid } from 'moment';
import { INVALID } from '@angular/forms/src/model';

@Component({
  selector: 'cliente',
  templateUrl: 'cliente.html'
})
export class ClienteComponent {
  public form: boolean;
  text: string;
  public resultados: any [] = [];
  public detail : any = {};
  public ciudades: any [] = []
  details: any={}
  constructor(
    private test: TestProvider
  ) {}

  ngOnInit(): void {
    this.test.generalGet('/ciudad')
      .then( data =>{
        this.ciudades = data;
      })
  }

  crear(crearUsuario : NgForm){
    this.test.generalPost('/cliente')
      .then( data =>{
        this.resultados = data;
        console.log(this.resultados,"Post");
        
      })
  }
  validarCn(cn){
    this.test.generalPost(`/cliente/cn`,{
      cn:this.detail.cn
    })
    .then( data =>{
      this.details=data;
        if(!this.details.cn  == this.detail.cn ){
          console.log("El cliente se puede crear");
        }if(this.detail.cn != null && this.details.cn  == this.detail.cn){
        alert('El código ya existe')
          this.detail.cn = "";
        }
      
      console.log("Validación de Código", this.detail);
      
    })
  }

}
