import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {

  projects = [
  {
    title: 'TimeTrack',
    description: 'Sistema de gestión de tiempos y tareas multiusuario. Comunicación en tiempo real mediante Sockets TCP/IP.',
    tech: ['Java', 'JavaFX', 'Sockets', 'SQLite'],
    icon: '🖥️',
    type: 'Escritorio'
  },
  {
    title: 'Android App',
    description: 'Colección de aplicaciones nativas enfocadas en la experiencia de usuario y rendimiento.',
    tech: ['Android', 'Java', 'ROOM'],
    icon: '📱',
    type: 'Móvil'
  },
  {
    title: 'Dev Portfolio',
    description: 'Web personal desarrollada con arquitectura modular, modo oscuro persistente y diseño responsivo.',
    tech: ['Angular', 'TypeScript', 'CSS3'],
    icon: '🌐',
    type: 'Web'
  }
];

constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Proyectos | Juan Francisco Rodríguez');
    this.metaService.updateTag({
      name: 'description',
      content: 'Explora mis proyectos de desarrollo de software: aplicaciones Android, sistemas en Java y bases de datos.'
    });
  }

}
