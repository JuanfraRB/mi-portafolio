import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Sidebar } from "./components/sidebar/sidebar";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, RouterOutlet, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isDarkMode = signal(false);
  isMobileMenuOpen = signal(false);

  constructor() {
    effect(() => {
      const mode = this.isDarkMode() ? 'dark' : 'light';

      // 1. Aplicamos el atributo al HTML para el CSS
      document.documentElement.setAttribute('data-theme', mode);

      // 2. Guardamos la elección en el navegador
      localStorage.setItem('theme', mode);
    });
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }

 toggleMobileMenu() {
  this.isMobileMenuOpen.update(v => !v);
}

closeMenuMobile() {
  this.isMobileMenuOpen.set(false);
}
}
