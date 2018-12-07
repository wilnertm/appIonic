import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'detail-invitados'
})
@Component({
  selector: 'page-detail-invitados',
  templateUrl: 'detail-invitados.html',
})
export class DetailInvitadosPage {

  public resultados: any [] = [];
  public actualizacion: any = {};
  detail: boolean = false;
  vacio: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage:Storage,
    private test:TestProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailInvitadosPage');
  }

  ngOnInit(){
    this.storage.get('usuario').then((val) =>{
      let usuario = parseInt(val);
      this.test.generalPost('/actividades_invitados',{
        creadoPor: usuario
      })
      .then( data =>{
        this.resultados = data;
        console.log("Longitud",this.resultados.length)
        if(this.resultados.length == 0){
          this.vacio = true;
          console.log("Vacio:",this.vacio);
          
        }
        else{
          this.vacio = false;
          console.log("Datos",this.vacio)
        }
        console.log(this.resultados,"Resultados");
      })
    })
    
  }
  prueba(id){
    // alert("Prueba")
    this.test.generalPut(`/actividad_invitado/${id}`,{
      acepto: true
    })
    .then( data =>{
      this.actualizacion = data;
      console.log(this.actualizacion,"Actualizando");
    })
  }

}
