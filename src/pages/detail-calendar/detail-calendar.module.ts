import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCalendarPage } from './detail-calendar';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    DetailCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCalendarPage),
    ComponentsModule,
    CalendarModule,
  ],
})
export class DetailCalendarPageModule {}
