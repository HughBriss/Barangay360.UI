import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Example: you can also define widgets dynamically if needed
  widgets = [
    { title: 'Widget 1', content: 'This is widget 1 content' },
    { title: 'Widget 2', content: 'This is widget 2 content' },
    { title: 'Widget 3', content: 'This is widget 3 content' }
  ];
}
