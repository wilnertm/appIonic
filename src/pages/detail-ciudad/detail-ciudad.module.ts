import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCiudadPage } from './detail-ciudad';

@NgModule({
  declarations: [
    DetailCiudadPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCiudadPage),
    ComponentsModule
  ],
})
export class DetailCiudadPageModule {}
