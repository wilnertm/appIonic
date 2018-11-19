import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailClientePage } from './detail-cliente';

@NgModule({
  declarations: [
    DetailClientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailClientePage),
    ComponentsModule
  ],
})
export class DetailClientePageModule {}
