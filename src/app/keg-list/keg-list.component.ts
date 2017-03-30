import { Component, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements AfterViewChecked {
  @Input() keg;
  @Output() drainSender = new EventEmitter();

  ngAfterViewChecked() {
    this.fillKeg();
  }

  fillKeg() {
    document.getElementById(this.keg.color).setAttribute("style", "background: linear-gradient(0deg, " + this.keg.color +", " + this.keg.color + " " + this.percent() + ", white " + this.percent() + ")");
  }

  percent() {
    let percent: string = ((this.keg.currentAmount/this.keg.totalAmount)*100).toString() + "%";
    return percent;
  }

  drain(amount: number) {
    let quantity = this.keg.currentAmount - amount;
    let params = {
      "key": this.keg.$key,
      "amount": quantity
    }
    this.drainSender.emit(params);
  }

}
