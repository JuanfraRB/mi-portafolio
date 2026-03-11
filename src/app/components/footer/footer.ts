import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  // Datos extraídos de tu información profesional
  contactInfo = {
    name: 'Juan Francisco Rodríguez Berenguel', // [cite: 1]
    location: 'Almería, España', // [cite: 1]
    email: 'JuanfraRB@outlook.es' // [cite: 1]
  };
}
