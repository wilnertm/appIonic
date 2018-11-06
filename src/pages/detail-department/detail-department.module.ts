import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailDepartmentPage } from './detail-department';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailDepartmentPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailDepartmentPage),
    ComponentsModule
  ],
})
export class DetailDepartmentPageModule {}
