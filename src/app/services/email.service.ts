import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Email {
  nome: string;
  email: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly apiUrl = 'http://localhost:5000/api/email'; // ou https://localhost:5001, se usar HTTPS

  constructor(private http: HttpClient) {}

  enviarEmail(dados: Email): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}
