import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  
techStyles: {
  [key: string]: { bg: string; color: string; icon: string }
} = {
  Angular: { bg: '#dd1b16', color: '#ffffff', icon: 'fab fa-angular' },
  '.NET': { bg: '#512bd4', color: '#ffffff', icon: 'fas fa-code' },
  MySQL: { bg: '#00758f', color: '#ffffff', icon: 'fas fa-database' },
  EntityFramework: { bg: '#68217a', color: '#ffffff', icon: 'fas fa-project-diagram' },
  MDBootstrap: { bg: '#4caf50', color: '#ffffff', icon: 'fas fa-layer-group' },
  'C#': { bg: '#178600', color: '#ffffff', icon: 'fas fa-hashtag' },
  Typescript: { bg: '#2b7489', color: '#ffffff', icon: 'fab fa-js' },
};

  
  projects = [
      {
    title: 'Módulo de Controle de Estoque',
    description:
      'Desenvolvimento completo de um módulo de Controle de Estoque, integrando diversas funcionalidades essenciais para a gestão eficiente de insumos e produtos. Entre os principais recursos desenvolvidos:',
    images: [
      'assets/img/estoque-0.png',
      'assets/img/estoque-1.png',
      'assets/img/estoque-2.jpg',
      'assets/img/estoque-3.png',
      'assets/img/estoque-4.png',
      'assets/img/estoque-5.png',
      'assets/img/estoque-6.png',
      'assets/img/estoque-7.png',
      'assets/img/estoque-8.png',
    ],
    technologies: ['Angular', '.NET', 'MySQL', 'EntityFramework', 'MDBootstrap', 'C#', 'Typescript'],
    features: [
      'Cadastro de produtos com controle de lote e validade',
      'Relatórios de entrada e saída',
      'Histórico de movimentações',
      'Integração com o módulo de tratamento (execução de procedimentos)',
      'Alertas automáticos de estoque mínimo',
    ]
  },
    {
      title: 'Módulo de Gestão de Tarefas e CRM',
      description:
        'Desenvolvimento de um módulo de Tarefas, com quadro de tarefas, adição de lembretes, notificação de lembretes e diversas funcionalidades',
      images: [
        'assets/img/crm-0.png',
        'assets/img/crm-1.png',
        'assets/img/crm-2.png'
      ],
      technologies: ['Angular', '.NET', 'MySQL', 'EntityFramework', 'MDBootstrap', 'C#', 'Typescript'],
    }
  ];
}
