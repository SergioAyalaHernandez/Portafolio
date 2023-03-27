import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejerciciocuatro',
  templateUrl: './ejerciciocuatro.component.html',
  styleUrls: ['./ejerciciocuatro.component.scss']
})
export class EjerciciocuatroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saludar(): void {
    alert("Hola mundo, algo que corre desde TS");
  }
}
