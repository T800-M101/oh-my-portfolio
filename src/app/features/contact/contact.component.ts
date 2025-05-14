import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  profileDataService = inject( ProfileDataService);
  profile = this.profileDataService.getProfile();
  
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) return;

    const data = this.contactForm.value;

    this.http
      .post('https://node-emailer.onrender.com/send-email', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.toastr.success('Email sent successfully!');
        },
        error: (error) => {
          console.error('Error:', error);
          this.toastr.error('Email could not be sent');
        },
      });
  }
}
