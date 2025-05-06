import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  links = [
    { label: 'Sobre mim', url: '/sobre' },
    { label: 'Projetos', url: '/projetos' },
    { label: 'Contato', url: '/contato' }
  ];

}
