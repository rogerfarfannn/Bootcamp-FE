import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user.model';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-and-practice');
  isReduced  = signal<boolean>(false);

  changeReducedStatus = () =>{
    this.isReduced.update(x=> !x);
  }

  user: User = {id: "123", role: "admin", name: "Pepe"};

  completedTasks = 3;
  totalTasks = 7;
  sprintProgress = this.completedTasks/this.totalTasks; 


  totalStorage = 50;
  occupiedStorage = 32;
  storageUse = this.occupiedStorage/this.totalStorage;

  occupancy = 0.7;

}
