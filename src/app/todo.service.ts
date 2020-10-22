import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class TodoVals {
  todos = [
    { id: 1, title: 'Brush', details: 'Brush your teeth.' },
    { id: 2, title: 'Eat', details: 'Eat your breakfast.' },
    { id: 3, title: 'Exercise', details: 'Go to the gym.' },
    { id: 4, title: 'Study', details: 'Practice Angular.js' },
  ];
  addingTodo(id, title, details) {
    this.todos.push({ id, title, details });
  }
  removingTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos);
    if (this.todos.length === 0) {
      this.todos = [
        { id: 1, title: 'Brush', details: 'Brush your teeth.' },
        { id: 2, title: 'Eat', details: 'Eat your breakfast.' },
        { id: 3, title: 'Exercise', details: 'Go to the gym.' },
        { id: 4, title: 'Study', details: 'Practice Angular.js' },
      ];
    }
  }
}
