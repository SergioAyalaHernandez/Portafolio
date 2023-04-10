import { Injectable } from '@angular/core';
import {PreloadAllModules, Route} from "@angular/router";
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadAllModules{

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any>{
    if(route.data && route.data['preload']){
      return load();
    }
    return of(null);
  }

  public loadScript(){
    console.log("script preparing");
    let node = document.createElement('script');
    node.src='../assets/test.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
