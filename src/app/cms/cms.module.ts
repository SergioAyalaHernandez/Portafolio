import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PagesComponent } from './pages/pages.component';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    PagesComponent,
    LayaoutComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
