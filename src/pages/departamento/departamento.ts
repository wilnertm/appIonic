import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: "departamento"
})
@Component({
  selector: 'page-departamento',
  templateUrl: 'departamento.html',
})
export class DepartamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartamentoPage');
  }

  goto(page){
    switch (page) {
      case "usuario":
        this.navCtrl.push("usuario")
        break;
    
      case "ciudad":
        this.navCtrl.push("ciudad")
        break;

      default:
        break;
    }
  }

}
