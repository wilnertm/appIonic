import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';

@IonicPage({
  name: "detail-usuario"
})
@Component({
  selector: 'page-detail-user',
  templateUrl: 'detail-user.html',
})
export class DetailUserPage {
  public details:any={}
  public detail:any={}
  public ciudades:any[]=[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private test:TestProvider
    ) {}

    ngOnInit(){
      this.test.generalGet(`/ciudad`)
      .then( data =>{
        this.ciudades=data;
        console.log("Ciudades", this.ciudades);
        
      })
    }

  ionViewDidLoad() {
    console.log('Datos',this.navParams.get('data'));

    if(this.navParams.get('data')){
      this.details=this.navParams.get('data')
      console.log("Detalles",this.details);
      
    }
    else{
      this.navCtrl.pop()
    }
  }

  actualizar(id){
    this.test.generalPut(`/usuario/${id}` ,this.details)
    .then( data =>{
      this.detail=data;
      console.log("Actualizado",this.detail);
      location.reload()
      
    })
  }

  closeModal(){
    this.navCtrl.pop()
  }

}
