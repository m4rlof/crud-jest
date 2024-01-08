import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTodoComponent } from './register-todo.component';

describe('RegisterTodoComponent', () => {
  let component: RegisterTodoComponent;
  let fixture: ComponentFixture<RegisterTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTodoComponent]
    });
    fixture = TestBed.createComponent(RegisterTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add a todo to the todoList', () => {
    // Arrange
    const todo = {
      id: "1234",
      name: "make a cake"
    };

    // Act
    component.addTodo(todo);

    // Assert
    expect(component.todoList).toContain(todo);
  });

  test('should list a todo list', () => {
    // Arrange
    const todoList = [
      {
        id: "1234",
        name: "make a cake"
      },
      {
        id: "1235",
        name: "make a cake"
      },
    ]

    // Act
    component.todoList = todoList;

    // Assert
    expect(component.todoList.length).toBeGreaterThan(0);
  });

  test('should edit a todo', () => {
    // Arrange
    const todo = {
      id: "1234",
      name: "make a cake"
    };

    const editTodo = {
      id: "1234",
      name: "make a brownie"
    };

    component.todoList.push(todo)

    // Act
    component.editTodo(editTodo);

    // Assert
    expect(component.todoList[0].name).toEqual(editTodo.name);
  });

  test('should delete a todo', () => {
    // Arrange
    const todoList = [
      {
        id: "1234",
        name: "make a cake"
      },
      {
        id: "1235",
        name: "make a cake"
      },
    ];

    component.todoList = todoList;

    // Act
    component.deleteTodo("1234");

    // Assert
    component.todoList.map(el => expect(el.id).not.toBe('1234'))
  });
});
