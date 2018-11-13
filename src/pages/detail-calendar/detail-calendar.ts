import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';
import * as moment from 'moment'


@IonicPage({
  name: "detail-calendar"
})
@Component({
  selector: 'page-detail-calendar',
  templateUrl: 'detail-calendar.html',
})
export class DetailCalendarPage {
  title:any  = "Crear Actividad"
  details: any = {}
  detail: any = {}
  resultados: any = {}
  actividad: any = {}
  public opciones: any []=[];
  public fechaInicial: Date;
  public fechaInicio: Date;
  public tipoActividad:any;
  public fechaFin: Date; 
  public asunto:string;
  public estado: any;
  public prioridades: any;
  public prioridad:any []=[];
  public tipos: any;
  public tipo:any []=[];
  public estados:any []=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private test: TestProvider) { }

  ionViewDidLoad() {
    if (this.navParams.get('data')) {
      console.log("Datos", this.navParams.get('data'));
      //parametros obtenidos de entidad padre por medio del modal
      this.detail = this.navParams.get('data')
      //funcion para encontrar el objeto al que pertenece el id
      this.detalle(this.detail);
    }
    else{
      this.fechaInicial = this.navParams.get('event')
      //Cuando el objeto viene sin id se setea por defecto la fecha seleccionada en el calendario
    }
  }

  ngOnInit(): void {
    this.test.generalGet(`/opcion`)
      .then( data =>{
        this.resultados = data;
        console.log("Resultados", this.resultados);
        this.categorizar();
      })
    
  }

  categorizar(){       
    for(let i = 0; i < this.resultados.length;i++){
      if(this.resultados[i].categoria == 3){
        this.prioridad.push(this.resultados[i]);
      }
      if(this.resultados[i].categoria == 1){
        this.opciones.push(this.resultados[i]);
      }
      if(this.resultados[i].categoria == 2){
        this.tipo.push(this.resultados[i]);
      }
      if(this.resultados[i].categoria == 4){
        this.estados.push(this.resultados[i]);
      }
    }
    console.log("prioridad:",this.prioridad);
    console.log("tipo actividad:",this.opciones);
    console.log("tipo:",this.tipo);
  }

  detalle(id) {
    this.test.generalGet(`/actividad/${id}`, this.detail)
      .then(data => {
        this.resultados = data;
        this.title = this.resultados.asunto;
        this.fechaInicio = new Date(moment(this.resultados.fecha_inicio).toDate())
        //parseando la fecha con el formato requerido por el input calendar
        if(this.resultados.fecha_fin != null){
          this.fechaFin = new Date(moment(this.resultados.fecha_fin).toDate())
        }else{
          this.fechaFin = null;
        }
        console.log("Get Detalle", this.resultados);
      })
  }

  actualizar(id) {
    this.test.generalPut(`/actividad/${id}`, {
      fechaInicio:this.fechaInicio,
      fechaFin:moment(this.fechaFin).add(5, 'h').format(),
      asunto: this.resultados.asunto
    })
      .then(data => {
        this.detail = data;
        console.log("Actualizando", this.detail);
        this.closeModal()
      })
  }

  closeModal() {
    this.navCtrl.pop()
  }

  crear(){
    this.test.generalPost(`/actividad`,{
      fecha_inicio:moment(this.fechaInicial).add(5, 'h').format(),
      fecha_fin:moment(this.fechaFin).add(5, 'h').format(),
      asunto: this.asunto,
      tipo_actividad: this.tipoActividad,
      tipo: this.tipos,
      prioridad: this.prioridades,
      estado_actividad: this.estado,
      activo: true
  })
      .then(data =>{
        this.resultados = data;
        console.log("Resultados Post", this.resultados);
        this.closeModal();
      })
      
  }
}
