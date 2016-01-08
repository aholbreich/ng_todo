import {Component} from 'angular2/core';
import {Todo} from './todo';
import {TodoList} from './todo_list';
import {TodoForm} from './todo_form';
import {TodoService} from './todo_service';

@Component({
  selector: 'todo-app',
  template: `
    <h2>Todo</h2>
    <span>{{remaining}} of {{todoService.todos.length}} remaining</span>
     <a href="javascript: false" (click)="archive()">archive</a>
    <todo-list [todos]="todoService.todos"></todo-list>
    <todo-form (newTask)="addTask($event)"></todo-form>`,
  directives: [TodoList, TodoForm]
})
export class TodoApp {
  
 constructor(public todoService:TodoService){}
  
  get remaining(): number {
    return this.todoService.todos.reduce((count, todo: Todo) => count + todo.done, 0);
  }
  
  archive(): void {
   this.todoService.archive();
  }
  
  addTask(task: Todo) {
    this.todoService.todos.push(task);
  }
}