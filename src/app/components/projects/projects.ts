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
    type: 'Móvil',
    repoUrl:'https://github.com/JuanfraRB/LinternaJFRB.git'
  },
  {
    title: 'Dev Portfolio',
    description: 'Web personal desarrollada con arquitectura modular, modo oscuro persistente y diseño responsivo.',
    tech: ['Angular', 'TypeScript', 'CSS3'],
    icon: '🌐',
    type: 'Web',
    repoUrl:'https://github.com/JuanfraRB/mi-portafolio.git'
  }
];

constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    const siteTitle = 'Proyectos | Juanfra Rodríguez';
  const siteDescription = 'Explora mis proyectos de desarrollo de software: aplicaciones Android, sistemas en Java y bases de datos.';
  const siteUrl = 'https://juanfrarb.netlify.app';
  const siteImage = `${siteUrl}/assets/mi_logo.png`;

  this.titleService.setTitle(siteTitle);

  // Etiquetas estándar
  this.metaService.updateTag({ name: 'description', content: siteDescription });

  // Etiquetas Open Graph (WhatsApp, LinkedIn, Facebook)
  this.metaService.updateTag({ property: 'og:title', content: siteTitle });
  this.metaService.updateTag({ property: 'og:description', content: siteDescription });
  this.metaService.updateTag({ property: 'og:url', content: siteUrl });
  this.metaService.updateTag({ property: 'og:image', content: siteImage });
  this.metaService.updateTag({ property: 'og:type', content: 'website' });

  // Twitter Card
  this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

}
