import { Component, OnInit } from '@angular/core';
import { TodoItems } from "../../models/TodoItems";
import { TodoServiceService } from "../../services/todo-service.service";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:TodoItems[];

  //mainly for importing services
  constructor(private todoService: TodoServiceService) { 

  }

  //runs right away
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todosDown => {
      this.todos = todosDown;
    });
  }

  deleteTodo(todoToDelete:TodoItems){
    this.todos = this.todos.filter(t => t.id !== todoToDelete.id);
    this.todoService.deleteTodo(todoToDelete).subscribe();
  }

  addTodo(todoToAdd: TodoItems){
    this.todoService.addTodo(todoToAdd).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
