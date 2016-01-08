import {Injectable} from 'angular2/core';
import {Todo} from './todo';
/**
 * TodoService
 */
@Injectable()
export class TodoService {
	
todos: Todo[] = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}
  ];
	
	archive(): void {
    console.log("archive");
    var oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach((todo: Todo) => {
      if (!todo.done) this.todos.push(todo);
    });
  }
  
}