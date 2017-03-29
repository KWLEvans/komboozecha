import { Component, Input, AfterViewChecked } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements AfterViewChecked {
  @Input() childKegList: Keg[];

  ngAfterViewChecked() {
    let saltwater;
    this.childKegList.forEach(function(keg) {
      if (keg.name === "Saltwater") {
        saltwater = keg;
      }
    });
    console.log(saltwater);
    document.getElementById("Saltwater").setAttribute("style", "background: linear-gradient(0deg, blue, blue " + saltwater.percent() + ", white " + saltwater.percent() + ")");
  }
}
