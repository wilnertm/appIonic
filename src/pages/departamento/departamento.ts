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

}
