import { Component, Input, OnInit } from '@angular/core';
import { PlanetInterface } from '../planet.interface';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input() planet: PlanetInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
