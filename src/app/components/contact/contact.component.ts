import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Email, EmailService } from '../../services/email.service';
import { take } from 'rxjs';

declare var bootstrap: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('erroModal') erroModal!: ElementRef;
  formContato: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.formContato = this.fb.group({
      dsNome: ['', Validators.required],
      dsEmail: ['', [Validators.required, Validators.email]],
      dsMensagem: ['', Validators.required],
    });
  }

  enviarEmail() {
    if (this.formContato.invalid) return;

    const dados: Email = this.formContato.value;

    this.emailService
      .enviarEmail(dados)
      .pipe(take(1))
      .subscribe({
        next: () => {
          alert('E-mail enviado com sucesso!');
        },
        error: () => this.abrirModalErro(),
      });
  }

    abrirModalErro() {
    const modal = new bootstrap.Modal(document.getElementById('erroModal')!);
    modal.show();
  }
}
