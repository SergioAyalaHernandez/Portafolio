import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PagesComponent } from './pages/pages.component';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { NavComponent } from './components/nav/nav.component';
import { GameComponent } from './game/game.component';
import { AlgodejsComponent } from './algodejs/algodejs.component';
import { EjerciciounoComponent } from './ejerciciouno/ejerciciouno.component';
import { EjerciciodosComponent } from './ejerciciodos/ejerciciodos.component';
import { EjerciciotresComponent } from './ejerciciotres/ejerciciotres.component';
import { EjerciciocuatroComponent } from './ejerciciocuatro/ejerciciocuatro.component';
import { EjerciciocincoComponent } from './ejerciciocinco/ejerciciocinco.component';
import {WebsiteModule} from "../website/website.module";
import { EjercicioseisComponent } from './ejercicioseis/ejercicioseis.component';
import { EjerciciosieteComponent } from './ejerciciosiete/ejerciciosiete.component';
import { EjercicioochoComponent } from './ejercicioocho/ejercicioocho.component';


@NgModule({
  declarations: [
    PagesComponent,
    LayaoutComponent,
    NavComponent,
    GameComponent,
    AlgodejsComponent,
    EjerciciounoComponent,
    EjerciciodosComponent,
    EjerciciotresComponent,
    EjerciciocuatroComponent,
    EjerciciocincoComponent,
    EjercicioseisComponent,
    EjerciciosieteComponent,
    EjercicioochoComponent
  ],
    imports: [
        CommonModule,
        CmsRoutingModule,
        WebsiteModule
    ]
})
export class CmsModule { }
