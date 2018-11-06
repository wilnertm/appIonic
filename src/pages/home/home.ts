import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ciudadPage = "ciudad"
  departamentoPage = "departamento"
  usuarioPage = "usuario"
  detailDepartamentoPage = "detail-departamento"

  constructor(public navCtrl: NavController) {

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
