import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayaoutComponent} from "./components/layaout/layaout.component";
import {PagesComponent} from "./pages/pages.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
