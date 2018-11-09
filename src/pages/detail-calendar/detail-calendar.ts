import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';
import * as moment from 'moment'
import { FormGroup, FormControl } from '@angular/forms';


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
  public fecha_inicio: string
  public fecha_fin: string
  public fechaInicio: Date
  public fechaFin: Date; 
  public asunto:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private test: TestProvider) { }

  ionViewDidLoad() {
    if (this.navParams.get('data')) {
      console.log("Datos", this.navParams.get('data'));

      this.detail = this.navParams.get('data')
      this.detalle(this.detail);
    }
    else{
      console.log("Datos", this.navParams.get('event'));
      this.fechaInicio = this.navParams.get('event')
    }
  }

  detalle(id) {
    this.test.generalGet(`/actividad/${id}`, this.detail)
      .then(data => {
        this.resultados = data;
        this.title = this.resultados.asunto;
        // this.fechaFin = new Date(moment(this.resultados.fecha_fin).toDate())
        this.fechaInicio = new Date(moment(this.resultados.fecha_inicio).toDate())
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
      asunto: this.asunto
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
    this.test.generalPost(`/actividad`, {
      fecha_inicio:moment(this.fechaInicio).add(5, 'h').format(),
      fecha_fin:moment(this.fechaFin).add(5, 'h').format(),
      asunto: this.asunto
    })
      .then(data =>{
        this.resultados = data;
        console.log("Resultados Post", this.resultados);
        this.closeModal();
      })
  }

  // YYYY-MM-DD T HH:mm:ss.0007

}
