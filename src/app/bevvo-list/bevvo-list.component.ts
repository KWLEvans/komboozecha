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

  serveBevvo(bevvo, size) {
    let servings = bevvo.serve(size);
    this.bevvoServer.emit(servings);
  }
}
