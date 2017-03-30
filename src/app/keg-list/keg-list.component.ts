import { Component, Input, AfterViewChecked } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Keg } from './../models/keg.model';
import { NewKegComponent } from './../new-keg/new-keg.component';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() kegs: FirebaseListObservable<any[]>;

  fillKeg(keg) {
    document.getElementById(keg.color).setAttribute("style", "background: linear-gradient(0deg, " + keg.color +", " + keg.color + " " + this.percent(keg) + ", white " + this.percent(keg) + ")");
  }

  percent(keg) {
    let percent: string = ((keg.currentAmount/keg.totalAmount)*100).toString() + "%";
    console.log(percent);
    return percent;
  }

  // ngAfterViewChecked() {
  //     this.kegs.forEach(function(keg) {
  //       this.fillKeg(keg);
  //     });
  // }
}
