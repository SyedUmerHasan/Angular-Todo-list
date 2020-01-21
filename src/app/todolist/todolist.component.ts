import { Component, OnInit, Output } from '@angular/core';
import { Todo } from '../model/Todo';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  todos: Todo[];
  name: string = "";
  id: number=5;
  constructor() { }

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
  onClick()
  {
    let someText = this.name.replace(/(\r\n|\n|\r)/gm, "");
    if(someText == "")
    {

    }
    else{
      this.todos.push(
        {
          id: this.id++,
          title: this.name,
          complete: false
        });
        this.name ="";
    }
  }
  onSelectUser = (abc) =>{
    console.log('Calling parent function ' + abc);
  }


}
