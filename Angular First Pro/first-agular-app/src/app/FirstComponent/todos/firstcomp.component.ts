import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddtodoComponent } from '../add-todo/addtodo.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-firstcomp',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddtodoComponent, AboutComponent],
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {
  todos: Todo[] = []; // Initialize the todos property

  // Initialize the component and load todos from localStorage
  ngOnInit() {
    this.loadTodos();
  }

  // Method to add a new todo
  addTodo(todo: Todo) {
    if (!this.todos.some(t => t.sno === todo.sno)) {
      this.todos.push(todo);
      this.saveTodos();
    }
  }

  // Method to delete a todo
  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(t => t.sno === todo.sno);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }

  // Method to toggle the 'active' status of a todo
toggleTodoStatus(todo: Todo) {
  // Find the index of the todo item
  const index = this.todos.findIndex(t => t.sno === todo.sno);

  if (index !== -1) {
    // Toggle the active status
    this.todos[index].active = !this.todos[index].active;

    // Debug log to check the updated todo item and the full todos list
    console.log('Updated todo:', this.todos[index]);
    console.log('All todos:', this.todos);

    // Save updated todos to localStorage
    this.saveTodos();
  } else {
    // Debug log to show if the todo item was not found
    console.error('Todo item not found:', todo);
  }
}


  // Method to load todos from localStorage
  private loadTodos() {
    if (typeof window !== 'undefined') {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        try {
          this.todos = JSON.parse(storedTodos);
        } catch (e) {
          console.error('Error parsing todos from localStorage', e);
          this.todos = [];
        }
      } else {
        this.todos = [];
      }
    }
  }

  // Method to save todos to localStorage
  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // Method to handle todo checkbox events from child components
  handleTodoCheckbox(todo: Todo) {
    this.toggleTodoStatus(todo);
  }

  // Optionally: Method to handle when a todo is deleted from a child component
  handleTodoDeleted(todo: Todo) {
    this.deleteTodo(todo);
  }
}
