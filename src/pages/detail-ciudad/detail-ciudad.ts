import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';


@IonicPage({
  name: "detail-ciudad"
})
@Component({
  selector: 'page-detail-ciudad',
  templateUrl: 'detail-ciudad.html',
})
export class DetailCiudadPage {

  public details:any={}
  public detail:any={}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private test: TestProvider
    ) {}

  ionViewDidLoad() {

    console.log('ionViewDidLoad DetailCiudadPage');

    if(this.navParams.get('data')){
      this.details=this.navParams.get('data')
    }
    else{
      this.navCtrl.pop()
    }
  }

  actualizar(id){
    this.test.generalPut(`/ciudad/${id}`, this.details)
    .then( data =>{
      this.detail=data;
      console.log("Actualizacion",data);
      location.reload()
      
    })
  }

  closeModal(){
    this.navCtrl.pop()
  }

}
