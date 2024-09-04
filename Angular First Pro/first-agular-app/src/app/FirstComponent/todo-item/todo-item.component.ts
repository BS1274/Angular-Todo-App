import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;  // Input property for the todo item
  @Input() i!: number;   // Input property for the index (if needed)
  @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter<Todo>();

  // Method to delete a todo item
  delete() {
    this.todoDeleted.emit(this.todo);
  }

  // Method to handle checkbox click and toggle the todo's active status
  onCheckboxClick() {
    this.todo.active = !this.todo.active;  // Toggle the active status
    this.todoCheckbox.emit(this.todo); // Emit the updated todo
  }
}
