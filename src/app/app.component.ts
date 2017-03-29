import { Component } from '@angular/core';
import { BevvoListComponent } from './bevvo-list/bevvo-list.component';
import { Bevvo } from './models/bevvo.model';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  adminView: boolean = false;

  viewToggle(button) {
    if (this.adminView === false) {
      this.adminView = true;
    } else {
      this.adminView = false;
    }
  }

  adjustInventory(servings) {
    this.masterKegList.forEach(function(keg) {
      if(servings[keg.name]) {
        keg.currentAmount -= servings[keg.name];
      }
    });
  }

  masterBevvoList: Bevvo[] = [
    new Bevvo("10,000 Leagues", {"Seaweed Kombucha": .6, "Radler": .2, "Saltwater": .2}),
    new Bevvo("Bone Down", {"Bone Broth": .3, "Cayenne Kombucha": .3, "Pimms": .2, "Saltwater": .2}),
    new Bevvo("Coffin Robber", {"Cayenne Kombucha": .2, "Absinthe Stout": .7, "Arsenic": .1}),
    new Bevvo("King Kom", {"Cayenne Kombucha": .1, "Banana Kombucha": .2, "Coconut Kombucha": .2, "Coffee Porter": .4, "Sweat": .1})
  ];
  masterKegList: Keg[] = [
    new Keg("Seaweed Kombucha", 1984, 1984),
    new Keg("Radler", 1984, 1984),
    new Keg("Saltwater", 1984, 1984),
    new Keg("Bone Broth", 1984, 1984),
    new Keg("Cayenne Kombucha", 1984, 1984),
    new Keg("Pimms", 1984, 1984),
    new Keg("Abisnthe Stout", 1984, 1984),
    new Keg("Arsenic", 1984, 1984),
    new Keg("Banana Kombucha", 1984, 1984),
    new Keg("Coconut Kombucha", 1984, 1984),
    new Keg("Coffee Porter", 1984, 1984),
    new Keg("Sweat", 1984, 1984)
  ]
}
