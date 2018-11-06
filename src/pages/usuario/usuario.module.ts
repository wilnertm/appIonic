import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioPage } from './usuario';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioPage),
    ComponentsModule
  ],
})
export class UsuarioPageModule {}
