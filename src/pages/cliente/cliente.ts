import { TestProvider } from './../../providers/test/test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage({
  name: 'cliente'
})
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})



export class ClientePage {

  resultados: any []=[];
  public form = false;
  public selected:any={}
  text: string;
  results: string[];
  public detail: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private test: TestProvider,
    public modal: ModalController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  ngOnInit(): void {
    this.test.generalGet('/cliente')
      .then(data =>{
        this.resultados = data;
        console.log("Get",this.resultados);
      })
  }

  encontrar(data){
    let modal=this.modal.create("detail-cliente", {data:this.selected})
    modal.present();
  }

}
