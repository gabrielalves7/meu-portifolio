import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Módulo de Controle de Estoque',
      description:
        'Módulo completo de controle de estoque desenvolvido para o sistema VIRTUAL CLÍNICA, com integração.',
      images: [
        'assets/estoque-1.png',
        'assets/estoque-2.png',
        'assets/estoque-3.png',
        'assets/estoque-4.png',
        'assets/estoque-5.png',
        'assets/estoque-6.png',
        'assets/estoque-7.png',
        'assets/estoque-8.png',
      ],
      technologies: ['Angular', 'Bootstrap', 'TypeScript', 'Firebase'], 
    },
  ];
}
