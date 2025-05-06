import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Portfólio Angular',
      description: 'Um site de portfólio responsivo desenvolvido com Angular e Bootstrap.',
      image: 'assets/images/portfolio-angular.png',
      link: 'https://github.com/seuusuario/portfolio-angular'
    },
    {
      title: 'API de Estoque',
      description: 'Backend RESTful para controle de estoque usando Node.js e MongoDB.',
      image: 'assets/images/api-estoque.png',
      link: 'https://github.com/seuusuario/api-estoque'
    },
    {
      title: 'Landing Page Produto',
      description: 'Landing page moderna com HTML, CSS e JS puro.',
      image: 'assets/images/landing-page.png',
      link: 'https://seusite.com/landing-page'
    }
  ];

}