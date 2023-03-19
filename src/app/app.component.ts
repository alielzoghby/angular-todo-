import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { every } from 'rxjs';

type Todo = {
  title: string;
  complet: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab1';
  textFeild: string = '';
  data: any = localStorage.getItem('todos');
  todos: Todo[] = JSON.parse(this.data) || [];
  theme: number = 1;

  addTodo(): void {
    if (this.textFeild)
      this.todos.push({ title: this.textFeild, complet: false });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(index: number): void {
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  combleteTodo(index: number): void {
    this.todos[index].complet = !this.todos[index].complet;
  }
}
