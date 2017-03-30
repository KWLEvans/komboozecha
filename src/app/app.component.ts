import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BevvoListComponent } from './bevvo-list/bevvo-list.component';
import { Bevvo } from './models/bevvo.model';
import { Keg } from './models/keg.model';
import { KegService } from './keg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KegService]
})

export class AppComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;
  adminView: boolean = false;

  constructor(private kegService: KegService) {}

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }


  viewToggle(button) {
    if (this.adminView === false) {
      this.adminView = true;
    } else {
      this.adminView = false;
    }
  }

  adjustInventory(servings) {
    this.kegService.adjustInventory(servings);
  }

  masterBevvoList: Bevvo[] = [
    new Bevvo("10,000 Leagues", {"Seaweed Kombucha": .6, "Radler": .2, "Saltwater": .2}),
    new Bevvo("Bone Down", {"Bone Broth": .3, "Cayenne Kombucha": .3, "Pimms": .2, "Saltwater": .2}),
    new Bevvo("Coffin Robber", {"Cayenne Kombucha": .2, "Absinthe Stout": .7, "Arsenic": .1}),
    new Bevvo("King Kom", {"Cayenne Kombucha": .1, "Banana Kombucha": .2, "Coconut Kombucha": .2, "Coffee Porter": .4, "Sweat": .1})
  ];
}
