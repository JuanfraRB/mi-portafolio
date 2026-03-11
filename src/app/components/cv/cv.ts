import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {

  profile = {
    name: 'Juan Francisco Rodríguez Berenguel',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    description: 'Desarrollador de software en etapa inicial con formación en desarrollo multiplataforma. Capacidad para aprender y adaptarme a nuevas tecnologías, complementada con disciplina y ética de trabajo.'
  };

  timeline = [
     {
      date: 'Feb 2024 - Actualidad',
      title: 'Vigilante de Seguridad (Prosegur)',
      place: 'Almería, España',
      description: 'Continuidad en el sector servicios de seguridad en Prosegur.'
    },

   {
      date: 'Ene 2025 - Mar 2025',
      title: 'Prácticas Formativas - IES Aguadulce - Estudio NOA',
      place: 'Almería, España',
      description: 'Periodo de prácticas regladas enfocadas en el desarrollo y mantenimiento de aplicaciones web en entorno real.'
    },
    {
      date: '2019 - 2025',
      title: 'Grado Superior en DAM',
      place: 'IES Aguadulce, Almería, España',
      description: 'Especialización en desarrollo de aplicaciones multiplataforma.'
    },
    {
      date: '2009 - 2024',
      title: 'Trayectoria en Seguridad Privada',
      place: 'Eulen, Ilunion, Ombuds, Castellana de Seguridad, Securitas',
      description: 'Larga trayectoria de más de 15 años demostrando resiliencia, puntualidad y capacidad de trabajar en entornos de alta exigencia y subrogaciones constantes.'
    },
    {
      date: '2000 - 2004',
      title: 'Etapa Inicial Profesional',
      place: 'Alcampo, Efilalmeria, Randstad, Adecco',
      description: 'Primeros años de experiencia laboral en diversos sectores, estableciendo las bases de mi ética de trabajo.'
    }
  ];
}
