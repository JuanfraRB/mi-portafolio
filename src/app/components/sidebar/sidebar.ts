import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() isOpen = false;
  @Input() isDark = false;
  @Output() close = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onToggleTheme() {
    this.toggleTheme.emit();
  }
}
