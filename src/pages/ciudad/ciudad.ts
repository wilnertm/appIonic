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

  departamentoPage = "departamento"
  usuarioPage = "usuario"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CiudadPage');
  }

  goto(page){
    switch (page) {
      case "departamento":
        this.navCtrl.push("ciudad")
        break;

      case "usuario":
        this.navCtrl.push("usuario")
        break;
    
      default:
        break;
    }
  }

}
