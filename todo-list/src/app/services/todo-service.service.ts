import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'


import { TodoItems } from "../models/TodoItems";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=10';

  constructor(private http:HttpClient) { }

  getTodos(): Observable<TodoItems[]> {
    return this.http.get<TodoItems[]>(this.todosUrl + this.todosLimit);
  }

  deleteTodo(todoDelete: TodoItems): Observable<any> {
      const url = this.todosUrl + '/' + todoDelete.id
      console.log("Deleted");
      return this.http.delete(url, httpOptions);
  }

    //toggle completed
  toggleCompleted(todoToggle: TodoItems):Observable<any>{
    const url = this.todosUrl + '/' + todoToggle.id;
    return this.http.put(url, todoToggle, httpOptions)
  }

  //add
  addTodo(todoAdd: TodoItems): Observable<TodoItems>{
    return this.http.post<TodoItems>(this.todosUrl, todoAdd, httpOptions);
  }
}
