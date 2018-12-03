import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';

@IonicPage({
  name: "usuario"
})
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  calendarPage = "calendar";
  ciudadPage = "ciudad"
  departamentoPage = "departamento"
  clientePage = "cliente"

  constructor(public navCtrl: NavController, public navParams: NavParams,private test: TestProvider) {
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

      case "about":
      this.navCtrl.push("calendar")
      break;

      case "cliente":
      this.navCtrl.push("cliente")
      break;
    
      default:
        break;
    }
  }

  logout(){
    this.test.destroyStorage();
  }


}
