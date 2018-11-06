import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepartamentoPage } from './departamento';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DepartamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(DepartamentoPage),
      ComponentsModule
  ],
})
export class DepartamentoPageModule {}
