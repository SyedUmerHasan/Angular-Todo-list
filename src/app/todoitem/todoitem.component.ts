import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../model/Todo';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() onSelection: (abc) => {};

  constructor() { }

  ngOnInit() {
  }

  getDynamicClasses() {
    if (this.todo.complete === true) {
      return 'completed';
    }
    return '';
  }

  completeItem() {
    if (this.todo.complete === true) {
      this.todo.complete = false;
    } else {
      this.todo.complete = true;
    }
  }
  deleteItem(){
    this.onSelection("umer");
  }
}
