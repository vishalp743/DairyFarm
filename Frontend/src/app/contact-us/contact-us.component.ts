import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { EmailService } from '../Services/email.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private emailService: EmailService) {}


  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

onSubmit() {
  console.log(this.formData);

  this.emailService.sendEmail(this.formData).subscribe(
    response => console.log('Email sent successfully!', response),
    error => console.error('There was an error sending the email', error)
  );
}
}
