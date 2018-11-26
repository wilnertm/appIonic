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
  public totalRecords: number;
  public loading: boolean;
  public rows: any;
  count: number;
  prueba: any [] = []
  nombre = "";


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

  ngOnInit(){
    this.cols = [
      { field: 'Detalle', header: 'Detalle' },
      { header: 'CN' },
      { field: 'Nombre', header: 'Nombre' },
      { header: 'Nit' },
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

  loadCarsLazy(event) {
    console.log("Lazy",event);
    this.loading = true;
    if(event.globalFilter == null){
      event.globalFilter = "";
    }
    this.test.generalPost('/clientes',{
      rango: event.first,
      nombre: event.globalFilter
    })
      .then(data => {
        this.resultados = data['rows'];
        console.log("Get", this.resultados);
        this.totalRecords = data['count'];
      });
    setTimeout(() => {
        if (this.resultados) {
            this.loading = false;
        }
    }, 1000);
}


}
