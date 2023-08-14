import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsRoutingModule } from './ps-routing.module';
import { PhotoComponent } from './photo/photo.component';
import { LayoutComponent } from './layout/layout.component';
import {WebsiteModule} from "../website/website.module";


@NgModule({
  declarations: [
    PhotoComponent,
    LayoutComponent
  ],
    imports: [
        CommonModule,
        PsRoutingModule,
        WebsiteModule
    ]
})
export class PsModule { }
