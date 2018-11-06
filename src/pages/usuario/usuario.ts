import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: "usuario"
})
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  ciudadPage = "ciudad"
  departamentoPage = "departamento"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  goto(page){
    switch (page) {
      case "ciudad":
        this.navCtrl.push("ciudad")
        break;

      case "departamento":
      this.navCtrl.push("departamento")
      break;

      case "usuario":
      this.navCtrl.push("usuario")
      break;

      case "detail-departamento":
      this.navCtrl.push("detail-departamento")
      break;
    
      default:
        break;
    }
  }


}
