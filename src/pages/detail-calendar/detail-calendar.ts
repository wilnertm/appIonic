import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';


@IonicPage({
  name: "detail-calendar"
})
@Component({
  selector: 'page-detail-calendar',
  templateUrl: 'detail-calendar.html',
})
export class DetailCalendarPage {

  details:any={}
  resultados:any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private test: TestProvider) 
    {}

  ionViewDidLoad() {
    if(this.navParams.get('data')){
      console.log("Datos",this.navParams.get('data'));
      
      this.details=this.navParams.get('data')    
    }
    else{
      this.navCtrl.pop()
    }
  }

  actualizar(id){
    this.test.generalPut(`/actividad/${id}`, this.details)
      .then( data =>{
        this.resultados=data;
        console.log("Actualizando",this.resultados);
        
      })
  }

  closeModal(){
    this.navCtrl.pop()
  }

}
