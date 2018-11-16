import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';


@IonicPage({
  name: 'detail-cliente'
})
@Component({
  selector: 'page-detail-cliente',
  templateUrl: 'detail-cliente.html',
})
export class DetailClientePage {

  public resultados: any = {};
  public details: any = {};
  public ciudades: any [] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private test: TestProvider
    ) {}

  ionViewDidLoad() {

    console.log('Datos',this.navParams.get('data'));

    if(this.navParams.get('data')){
      this.resultados = this.navParams.get('data');
    }else{
      this.navCtrl.pop()
    }
  }

  ngOnInit(): void {
    this.test.generalGet('/ciudad')
      .then( data =>{
        this.ciudades = data;
        console.log("Ciudades",this.ciudades);
      })
  }

  actualizar(id){
    this.test.generalPut(`/cliente/${id}`)
      .then( data =>{
        this.resultados  = data;
        console.log("Actualizando",this.resultados)
      })
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
