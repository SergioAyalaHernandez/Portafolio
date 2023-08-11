import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {CustomPreloadService} from "./services/custom-preload.service";
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./website/website.module').then(m=> m.WebsiteModule),
    data:{
      preload: true
    }
  },
  {
    path: 'cms',

    loadChildren:() => import('./cms/cms.module').then(m=> m.CmsModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'ps',

    loadChildren:() => import('./ps/ps.module').then(m=> m.PsModule),
    canActivate: [AdminGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: CustomPreloadService //< de acuerdo a las directivas del servicio
    //preloadingStrategy: PreloadAllModules //< carga de acuerdo al orden y precarga
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
