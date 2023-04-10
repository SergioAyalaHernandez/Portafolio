import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayaoutComponent} from "./components/layaout/layaout.component";
import {PagesComponent} from "./pages/pages.component";
import {GameComponent} from "./game/game.component";
import {AlgodejsComponent} from "./algodejs/algodejs.component";
import {EjerciciounoComponent} from "./ejerciciouno/ejerciciouno.component";
import {EjerciciodosComponent} from "./ejerciciodos/ejerciciodos.component";
import {EjerciciotresComponent} from "./ejerciciotres/ejerciciotres.component";
import {EjerciciocuatroComponent} from "./ejerciciocuatro/ejerciciocuatro.component";
import {EjerciciocincoComponent} from "./ejerciciocinco/ejerciciocinco.component";
import {EjercicioseisComponent} from "./ejercicioseis/ejercicioseis.component";
import {EjerciciosieteComponent} from "./ejerciciosiete/ejerciciosiete.component";
import {EjercicioochoComponent} from "./ejercicioocho/ejercicioocho.component";

const routes: Routes = [
  {
    path: '',
    component: LayaoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'grid',
        pathMatch: 'full'
      },
      {
        path: 'grid',
        component: PagesComponent
      },
      {
        path: 'scroll',
        component: GameComponent
      },
      {
        path: 'algodejs',
        component: AlgodejsComponent
      },
      {
        path: 'ejercicio1',
        component: EjerciciounoComponent
      },
      {
        path: 'ejercicio2',
        component: EjerciciodosComponent
      },
      {
        path: 'ejercicio3',
        component: EjerciciotresComponent
      },
      {
        path: 'ejercicio4',
        component: EjerciciocuatroComponent
      },
      {
        path: 'ejercicio5',
        component: EjerciciocincoComponent
      },
      {
        path: 'ejercicio6',
        component: EjercicioseisComponent
      },
      {
        path: 'ejercicio7',
        component: EjerciciosieteComponent
      },
      {
        path: 'ejercicio8',
        component: EjercicioochoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
