//like a standard tag library, always import before using
import { Component, OnInit } from '@angular/core';

//import hero class from outside
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //instantiated the class into instance and uses it
  hero : Hero={
    id:1,
    name:'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
