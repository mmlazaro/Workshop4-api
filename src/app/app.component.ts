import { Component, OnInit } from '@angular/core';
import { PlanetInterface } from './planet.interface';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'workshop4-example-api';
  constructor(private starswarsService: StarwarsService) {}

  planets$ = this.starswarsService.getPlanets();
  // planets: PlanetInterface[];

  ngOnInit(): void {
    /* this.starswarsService.getPlanets().subscribe(planets => {
      this.planets = planets;
    }); */
  }
}
