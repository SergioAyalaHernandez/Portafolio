import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { HomeComponent } from './pages/home/home.component';
import { ParteOneComponent } from './pages/home/parte-one/parte-one.component';
import { ParteTwoComponent } from './pages/home/parte-two/parte-two.component';
import { ParteThreeComponent } from './pages/home/parte-three/parte-three.component';
import { ParteFourComponent } from './pages/home/parte-four/parte-four.component';
import { ParteFiveComponent } from './pages/home/parte-five/parte-five.component';
import { ParteSixComponent } from './pages/home/parte-six/parte-six.component';
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    LayaoutComponent,
    HomeComponent,
    ParteOneComponent,
    ParteTwoComponent,
    ParteThreeComponent,
    ParteFourComponent,
    ParteFiveComponent,
    ParteSixComponent
  ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        SwiperModule
    ]
})
export class WebsiteModule { }
