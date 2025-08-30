import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isEntering = false;
  isLeaving = false;
  protected readonly title = signal('Barangay 360');

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLeaving = true;
        this.isEntering = false;
      }
      if (event instanceof NavigationEnd) {
        this.isLeaving = false;
        this.isEntering = true;
        setTimeout(() => this.isEntering = false, 500);
      }
    });
  }
}
