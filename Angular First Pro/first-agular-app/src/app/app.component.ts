// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FirstcompComponent } from './FirstComponent/todos/firstcomp.component'; 
import { AboutComponent } from './FirstComponent/about/about.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, FirstcompComponent, AboutComponent]
})
export class AppComponent {
  title = 'first-agular-app';
}
