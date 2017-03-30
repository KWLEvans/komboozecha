import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { KegService } from './../keg.service';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css'],
  providers: [KegService]
})
export class NewKegComponent {

  constructor(private kegService: KegService) { }

  submitForm(name: string, size: number, color: string) {
    var newKeg: Keg = new Keg(name, size, size, color);
    this.kegService.addKeg(newKeg);
  }

}
