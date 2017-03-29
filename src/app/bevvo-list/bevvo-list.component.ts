import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bevvo } from './../models/bevvo.model';

@Component({
  selector: 'bevvo-list',
  templateUrl: './bevvo-list.component.html',
  styleUrls: ['./bevvo-list.component.css']
})

export class BevvoListComponent {
  @Input() childBevvoList: Bevvo[];
  @Output() bevvoServer = new EventEmitter;

  serveBevvo(bevvo) {
    console.log(bevvo);
    let servings = bevvo.serve();
    this.bevvoServer.emit(servings);
  }
}
