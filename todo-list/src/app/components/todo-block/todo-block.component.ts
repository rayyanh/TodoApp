import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItems } from 'src/app/models/TodoItems';
import { TodoServiceService } from "../../services/todo-service.service";

@Component({
  selector: 'app-todo-block',
  templateUrl: './todo-block.component.html',
  styleUrls: ['./todo-block.component.css']
})
export class TodoBlockComponent implements OnInit {
  @Input() todoPassIn: TodoItems;
  @Output() todoPassOut: EventEmitter<TodoItems> = new EventEmitter;

  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      todoIs: true,
      'is-complete': this.todoPassIn.completed
    }
    return classes;
  }

  onToggle(todoItem){
    // UI toggle
    todoItem.completed = !todoItem.completed;
    // server toggle
    this.todoService.toggleCompleted(todoItem).subscribe(todo => {
      console.log(todo);
    })

  }

  onDelete(todoItem){
    this.todoPassOut.emit(todoItem);
  }

}
