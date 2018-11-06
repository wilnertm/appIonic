import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CiudadPage } from './ciudad'; 
import { ComponentsModule } from '../../components/components.module';
 
@NgModule({
  declarations: [
    CiudadPage,
    
  ],
  imports: [
    IonicPageModule.forChild(CiudadPage),
     ComponentsModule 
  ],
})
export class CiudadPageModule {}
