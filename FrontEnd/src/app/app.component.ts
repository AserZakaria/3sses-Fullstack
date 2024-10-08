import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './core/sidebar/sidebar.component'; // Import SidebarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, SidebarComponent], // Import SidebarComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3ssesFront';
  isSidebarHovered: boolean = false;

  constructor(private router: Router) {}

  onSidebarHover() {
    this.isSidebarHovered = true;
  }

  onSidebarLeave() {
    this.isSidebarHovered = false;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
