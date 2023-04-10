import { Component, OnInit } from '@angular/core';
import {CustomPreloadService} from "../../services/custom-preload.service";

@Component({
  selector: 'app-ejerciciocinco',
  templateUrl: './ejerciciocinco.component.html',
  styleUrls: ['./ejerciciocinco.component.scss']
})
export class EjerciciocincoComponent implements OnInit {

  constructor(
    private customService: CustomPreloadService
  ) { }

  ngOnInit(): void {
  }

  public animar(): void{
    this.customService.chisPum();
  }

  public chispum(any: any): any{
    if(any % 3 == 0 && any % 5 == 0){
      return "chispum";
    }else if(any % 3 == 0){
      return "chis";
    }else if(any % 5 == 0){
      return "pum";
    }
    return any;
  }
}
