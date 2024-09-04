import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';

@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {
  title: string = '';
  description: string = '';

  @Output() todoAdded: EventEmitter<Todo> = new EventEmitter<Todo>();
  

  onSubmit() {
    const newTodo: Todo = {
      sno: Date.now(), // Unique ID
      title: this.title,
      description: this.description, 
      active: true
    };

    this.todoAdded.emit(newTodo);
    this.title = '';
    this.description = '';
  }
}
