import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-register-todo',
  templateUrl: './register-todo.component.html',
  styleUrls: ['./register-todo.component.scss']
})
export class RegisterTodoComponent {
  public todoList: ToDo[] = [];

  public addTodo(todo: ToDo) {
    this.todoList.push(todo);
    return this.todoList;
  }

  public editTodo(todo: ToDo) {
    const editedList = this.todoList.map(item => (item.id === todo.id ? todo : item));
    this.todoList = editedList;
  }

  public deleteTodo(todoId: string) {
    const newTodoList = this.todoList.filter(item => item.id !== todoId);
    this.todoList = newTodoList;
  }

}
