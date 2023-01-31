import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PagesComponent } from './pages/pages.component';
import { LayaoutComponent } from './components/layaout/layaout.component';


@NgModule({
  declarations: [
    PagesComponent,
    LayaoutComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
