import { Injectable } from '@angular/core';
import { Keg } from './models/keg.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.kegs = angularFire.database.list('kegs', { preserveSnapshot: true });
  }

  getKegs() {
    return this.kegs;
  }

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }

  getKegById(kegId: string) {
    return this.angularFire.database.object('/kegs/' + kegId);
  }

  adjustInventory(servings) {
    let that = this;
    this.kegs.forEach(function(keg) {
      keg.forEach(function(subkeg) {
        let currentKeg = that.getKegById(subkeg.$key);
        currentKeg.subscribe(snapshot => {
          console.log(snapshot);
        });
        console.log(currentKeg);
        // if(servings[currentKeg.name]) {
        //   currentKeg.currentAmount -= servings[currentKeg.name];
        // }
      });
    });
  }
}
