import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Keg } from './models/keg.model';
import { KegService } from './keg.service';
import { NewKegComponent } from './new-keg/new-keg.component';
import { FullnessPipe } from './fullness.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KegService]
})

export class AppComponent implements OnInit {
  kegs: Keg[];
  adminView: boolean = false;

  constructor(private kegService: KegService) {}

  ngOnInit() {
    this.kegService.getKegs().subscribe(kegArray => {
      let kegList: Keg[] = [];
      kegArray.forEach(keg => {
        let newKeg = new Keg(keg.name, keg.currentAmount, keg.totalAmount, keg.color, keg.$key);
        kegList.push(newKeg);
      });
      this.kegs = kegList;
    });
  }


  viewToggle(button) {
    if (this.adminView === false) {
      this.adminView = true;
    } else {
      this.adminView = false;
    }
  }

  drain(params) {
    let keg = this.kegService.getKegById(params.key);
    keg.update({currentAmount: params.amount});
  }
}
