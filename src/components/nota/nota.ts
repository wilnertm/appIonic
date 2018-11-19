import { TestProvider } from './../../providers/test/test';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'nota',
  templateUrl: 'nota.html'
})
export class NotaComponent {

  public agregarNota = false;
  public vacio = false;
  getId:any;
  public notas: any [] = [];
  resultados: any = {};
  resultadosGet: any [] = [];
  nombre: any;
  nombres= "actividades";

  @Input() set id(val){
    if(val!=""){
      this.getId = val;
    }
  }

  @Input() set modulo(val){
    if(val!=""){
      this.nombre = val;
    }
  }


  constructor(
    private test: TestProvider,
    private toastCtrl: ToastController,
  ) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Nota Creada',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  ngOnInit(){
    console.log("IdNota",this.getId);
    console.log("NombreModulo", this.nombre);
    

    this.test.generalPost('/nota' , {
      id_referencia:this.nombre,
      actividad: this.getId + ""
    })
      .then( data =>{
        this.resultadosGet = data ;
        if(this.resultadosGet.length == 0){
          this.vacio = true;
        }
        console.log("GetResults", this.resultadosGet)
      })
  }


  crearNota(crearNota: NgForm){
    this.test.generalPost('/notas' ,{
      descripcion: this.notas,
      actividad: this.getId + "",
      id_referencia: this.nombre,
      
    })
    .then( data =>{
      this.resultados = data;
      this.resultadosGet.push(this.resultados)
      this.presentToast();
      this.notas = null;
      console.log("Resultados Nota",data);
      
    })
  }

}
