import { Component, OnInit } from '@angular/core';
import {CustomPreloadService} from "../../services/custom-preload.service";

@Component({
  selector: 'app-ejercicioocho',
  templateUrl: './ejercicioocho.component.html',
  styleUrls: ['./ejercicioocho.component.scss']
})
export class EjercicioochoComponent implements OnInit {

  constructor(
    private customService: CustomPreloadService
  ) { }

  ngOnInit(): void {
    this.customService.paint();
  }

}
