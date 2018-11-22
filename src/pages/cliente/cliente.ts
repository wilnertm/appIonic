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

  resultados: any[] = [];
  public form = false;
  public selected: any = {}
  text: string;
  results: string[];
  public detail: any = {};
  public cols: any[] = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private test: TestProvider,
    public modal: ModalController
  ) { }

  ionViewDidLoad() {
  }

  onTypeEmitted(event) {
    this.resultados.push(event)
    console.log("Evento", event)
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.test.generalGet('/cliente')
      .then(data => {
        this.resultados = data;
        console.log("Get", this.resultados);
      });

    this.cols = [
      { field: 'Detalle', header: 'Detalle' },
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Emails', header: 'Emails' },
      { field: 'Telefonos', header: 'Telefonos' },
      { field: 'Ciudad', header: 'Ciudad' }
    ];
  }

  encontrar(data) {
    let modal = this.modal.create("detail-cliente", { data: this.selected })
    modal.present();
    // console.log("Datos",data);

  }

  filterGlobal(event) {
    this.test.generalGet('/findCliente', {
      nombre: event.nombre
    })
      .then(data => {
        this.resultados = data;
      })
  }


}
