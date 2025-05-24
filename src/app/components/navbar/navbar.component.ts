import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

itemAtivo: string = '';


selecionarItem(item: string) {
  this.itemAtivo = item;
}

  links = [
    { label: 'Sobre mim', url: '/sobre' },
    { label: 'Projetos', url: '/projetos' },
    { label: 'Contato', url: '/contato' }
  ];

}
