import { Component, OnInit } from '@angular/core';
import {CustomPreloadService} from "../../services/custom-preload.service";

@Component({
  selector: 'app-ejerciciosiete',
  templateUrl: './ejerciciosiete.component.html',
  styleUrls: ['./ejerciciosiete.component.scss']
})
export class EjerciciosieteComponent implements OnInit {

  constructor(
    private customService: CustomPreloadService
  ) { }

  ngOnInit(): void {
    this.customService.canvas();
  }

  public canvas2(): void{
    this.customService.canvas();
    this.customService.canvas2();
  }
  public flor(): void{
    this.customService.canvas();
    this.customService.flor();
  }
  public perro(): void{
    this.customService.canvas();
    this.customService.perro();
  }
}
