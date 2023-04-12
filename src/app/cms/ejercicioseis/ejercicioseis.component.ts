import { Component, OnInit } from '@angular/core';
import {CustomPreloadService} from "../../services/custom-preload.service";

@Component({
  selector: 'app-ejercicioseis',
  templateUrl: './ejercicioseis.component.html',
  styleUrls: ['./ejercicioseis.component.scss']
})
export class EjercicioseisComponent implements OnInit {

  constructor(
    private customService: CustomPreloadService
    ) {

  }

  ngOnInit(): void {

  }

  public animar(): void{
    this.customService.loadScript();
  }



}
