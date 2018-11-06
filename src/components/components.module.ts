import { NgModule } from '@angular/core';
import { DepartamentosComponent } from './departamentos/departamentos';
import { CiudadesComponent } from './ciudades/ciudades';
import { UsuariosComponent } from './usuarios/usuarios';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer'; 
import { IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { LoginComponent } from './login/login';

@NgModule({
    declarations: [DepartamentosComponent,
        CiudadesComponent,
        UsuariosComponent,
        NavbarComponent,
        FooterComponent,
        SearchPipe,
        SortPipe,
    LoginComponent],
    imports: [IonicModule,FormsModule,],
    exports: [DepartamentosComponent,
        CiudadesComponent,
        UsuariosComponent,
        NavbarComponent,
        FooterComponent,
        SearchPipe,
        SortPipe,
    LoginComponent]
})
export class ComponentsModule { }
