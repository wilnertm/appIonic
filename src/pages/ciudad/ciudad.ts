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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CiudadPage');
  }

}
