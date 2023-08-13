// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {

// }


import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { MailEntity } from 'src/app/mail.entity';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(private emailService: EmailService) { }

  sendEmail(event: Event) {
    event.preventDefault();

    const mail: MailEntity = {
      email: this.email,
      subject: this.subject,
      message: this.message
    };

this.emailService.sendMail(mail)
      .subscribe(() => {
        // console.log('Email sent successfully');
        alert("Email sent successfully");
        this.email = '';
        this.subject = '';
        this.message = '';
      }, (error) => {
        // console.error('Error sending email:', error);
        alert('Email sent successfully');
      });
  }

}
