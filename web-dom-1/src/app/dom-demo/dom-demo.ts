import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dom-demo',
  imports: [],
  templateUrl: './dom-demo.html',
  styleUrl: './dom-demo.css',
})
export class DomDemo {
  title = signal('Título inicial desde Angular');

  tasks = signal([
    { id: 1, name: 'Estudiar HTML' },
    { id: 2, name: 'Entender el DOM' },
    { id: 3, name: 'Ver Angular en DevTools' },
  ]);

  changeTitle() {
    this.title.set('Título actualizado desde TypeScript');
  }

  addTask() {
    this.tasks.update((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now(),
        name: 'Nueva tarea agregada al DOM',
      },
    ]);
  }

  resetDemo() {
    this.title.set('Título inicial desde Angular');

    this.tasks.set([
      { id: 1, name: 'Estudiar HTML' },
      { id: 2, name: 'Entender el DOM' },
      { id: 3, name: 'Ver Angular en DevTools' },
    ]);
  }
}
