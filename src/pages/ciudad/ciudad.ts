import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: "ciudad"
})
@Component({
  selector: 'page-ciudad',
  templateUrl: 'ciudad.html',
})
export class CiudadPage {

  DepartamentoPage = "departamento"
  UsuarioPage = "usuario"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CiudadPage');
  }

  goto(page){
    switch (page) {
      case "departamento":
        this.navCtrl.push("departamento")
        break;

      case "usuario":
        this.navCtrl.push("usuario")
        break;
    
      default:
        break;
    }
  }

}
