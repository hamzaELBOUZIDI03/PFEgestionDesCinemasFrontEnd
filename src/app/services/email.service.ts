import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailEntity } from 'src/app/mail.entity';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = 'http://localhost:8085/mail/contact-us';

  constructor(private http: HttpClient) { }

  sendMail(mail: MailEntity): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, mail);
  }

}
