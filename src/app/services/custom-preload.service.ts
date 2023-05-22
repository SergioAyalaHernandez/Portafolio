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
  public chisPum(){
    console.log("script preparing");
    let node = document.createElement('script');
    node.src='../assets/chispum.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public canvas(){
    let node = document.createElement('script');
    node.src='../assets/dibujosCanvas/canvas.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public canvas2(){
    let node = document.createElement('script');
    node.src='../assets/dibujosCanvas/canvas2.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public perro(){
    let node = document.createElement('script');
    node.src='../assets/dibujosCanvas/perro.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public flor(){
    let node = document.createElement('script');
    node.src='../assets/dibujosCanvas/flor.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public paint(){
    let node = document.createElement('script');
    node.src='../assets/paint.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public tiro(){
    let node = document.createElement('script');
    node.src='../assets/tiro.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public convertidor(){
    let node = document.createElement('script');
    node.src='../assets/convertidor.js';
    node.type= 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
