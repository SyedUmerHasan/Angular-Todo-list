import { Component, OnInit, Output } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor() {}
  todos: Todo[];
  name = '';
  id = 5;

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: `This is my osama`,
        complete: false
      },
      {
        id: 2,
        title: `This is my huzaifa`,
        complete: false
      },
      {
        id: 3,
        title: `This is my sara`,
        complete: false
      },
      {
        id: 4,
        title: `This is my umer`,
        complete: false
      }
    ];
  }
  onClick() {
    const someText = this.name.replace(/(\r\n|\n|\r)/gm, '');
    if (someText === '') {
    } else {
      this.todos.push({
        id: this.id++,
        title: this.name,
        complete: false
      });
      this.name = '';
    }
  }

  onSelectUser = (deleteId: number) => {
    this.todos = this.todos.filter(item => item.id !== deleteId);
  }
}
