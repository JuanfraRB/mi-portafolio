import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();


  contactInfo = {
    name: 'Juan Francisco Rodríguez Berenguel',
    location: 'Almería, España',
    email: 'JuanfraRB@outlook.es'
  };
}
