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
  public scrollableCols : any = [];
  public totalRecords: number;
  public loading: boolean;
  public rows: any;
  count: number;
  prueba: any[] = []
  nombre = "";
  frozenCols: any = [];
  ciudadCliente: any;


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

  ngOnInit() {

    this.scrollableCols  = [
      // { field: 'Detalle', header: 'Detalle' },
      // { field: 'CN', header: 'CN' },
      { field: `nombre`, header: 'Nombre' },
      { field: `nit`, header: 'Nit' },
      { field: 'correosCliente', header: 'Emails' },
      { field: 'telefonosCliente', header: 'Telefonos' },
      { field: 'ciudadCliente', header: 'Ciudad' },
      { field: 'id_ciudad', header: 'Ciudad' },
      { field: 'id_ciudad', header: 'Ciudad' },
      { field: 'id_ciudad', header: 'Ciudad' },

    ];
    this.frozenCols = [
      { field: 'detalle', header: 'Detalle' },
      { field: 'cn', header: 'CN' },
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
    console.log("Lazy", event);
    this.loading = true;
    if (event.globalFilter == null) {
      event.globalFilter = "";
    }
    this.test.generalPost('/clientes', {
      rango: event.first,
      nombre: event.globalFilter
    })
      .then(data => {
        this.resultados = data['rows'];
        console.log("Get", this.resultados);
        this.totalRecords = data['count'];
        // this.cols = [
        //   // { field: 'Detalle', header: 'Detalle' },
        //   // { field: 'CN', header: 'CN' },
        //   { field: `nombre`, header: 'Nombre' },
        //   { field: `nit`, header: 'Nit' },
        //   { field: 'correos', header: 'Emails' },
        //   { field: 'telefonos', header: 'Telefonos' },
        //   { field: 'id_ciudad', header: 'Ciudad' },
        // ];
        // this.frozenCols = [
        //   { field: 'detalle', header: 'Detalle' },
        //   { field: 'cn', header: 'CN' },
        // ];
      });
    setTimeout(() => {
      if (this.resultados) {
        this.loading = false;
      }
    }, 1000);
  }


}
