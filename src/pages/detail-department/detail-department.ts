import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';
import { DepartamentosComponent } from '../../components/departamentos/departamentos';


@IonicPage({
  name: "detail-departamento"
})
@Component({
  selector: 'page-detail-department',
  templateUrl: 'detail-department.html',
})
export class DetailDepartmentPage {
  detail:any={}
  nombre:string=""
  id:number
  departmentParams: any[]=[]
  details:any={}


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private test:TestProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDepartmentPage');
    
    this.detail=this.navParams.get('data')
    

    if(this.navParams.get('data')){
      // consuta al service
      this.encontrar(this.detail.id);
    }
    else{
      this.navCtrl.pop();
    }

  }

  encontrar(id){
    this.test.generalGet(`/departamento/${id}`)
      .then(data =>{
        this.details = data
        console.log("Departamento",data); 
      })
  }

  actualizar(id){
    this.test.generalPut(`/departamento/${id}`, {
      nombre:this.details.nombre
    })
    .then( data =>{
      this.details=data;
      location.reload();
      console.log(data);
      
    })
  }

  closeModal() {
    this.navCtrl.pop();
  }

  

}
