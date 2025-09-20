import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';
import { throwError, TimeoutError } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [TranslateModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = signal<boolean>(false) ;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  submitMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      isAnonymous: [true],
      name: [''],
      email: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Add conditional validators for name and email when not anonymous
    this.contactForm.get('isAnonymous')?.valueChanges.subscribe(isAnonymous => {
      const nameControl = this.contactForm.get('name');
      const emailControl = this.contactForm.get('email');

      if (isAnonymous) {
        nameControl?.clearValidators();
        emailControl?.clearValidators();
      } else {
        nameControl?.setValidators([Validators.required, Validators.minLength(2)]);
        emailControl?.setValidators([Validators.required, Validators.email]);
      }

      nameControl?.updateValueAndValidity();
      emailControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);
      this.submitStatus = 'idle';

      const formData = this.contactForm.value;
      const messageData = {
        message: formData.message,
        timestamp: new Date().toISOString(),
        ip: 'unknown', // Will be set by backend
        isAnonymous: formData.isAnonymous,
        name: formData.isAnonymous ? 'Anonymous' : formData.name,
        email: formData.isAnonymous ? null : formData.email
      };

      // Call your backend API with timeout
      this.http.post('https://porto-backend.onrender.com/api/contact', messageData)
        .pipe(
          timeout(10000), // 10 second timeout
          catchError((error: HttpErrorResponse) => {
            console.error('API Error:', error);
            this.submitStatus = 'error';

            // Handle different types of errors
            if (error.status === 429) {
              this.submitMessage = 'CONTACT.RATE_LIMIT_ERROR';
            } else if (error.status === 400) {
              this.submitMessage = error.error?.message || 'CONTACT.VALIDATION_ERROR';
            } else if (error.status === 0 || error instanceof TimeoutError) {
              this.submitMessage = 'CONTACT.NETWORK_ERROR';
            } else {
              this.submitMessage = 'CONTACT.ERROR_MESSAGE';
            }

            this.isSubmitting.set(false);
            return throwError(() => error);
          })
        )
        .subscribe({
          next: (response: any) => {
            console.log('API Response:', response);

            if (response && response.success) {
              this.submitStatus = 'success';
              this.submitMessage = 'CONTACT.SUCCESS_MESSAGE';
              this.contactForm.reset();
            } else {
              this.submitStatus = 'error';
              this.submitMessage = response?.message || 'CONTACT.ERROR_MESSAGE';
            }
            this.isSubmitting.set(false);
          },
          error: (error) => {
            // Error is already handled in catchError
            console.log('Request failed:', error);
          }
        });
    } else {
      this.contactForm.get('message')?.markAsTouched();
    }
  }

  resetForm() {
    this.contactForm.reset({
      isAnonymous: true,
    });
    this.submitStatus = 'idle';
    this.submitMessage = '';
  }

  get isAnonymous(): boolean {
    return this.contactForm.get('isAnonymous')?.value;
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `CONTACT.VALIDATION.${fieldName.toUpperCase()}_REQUIRED`;
      }
      if (field.errors['email']) {
        return 'CONTACT.VALIDATION.EMAIL_INVALID';
      }
      if (field.errors['minlength']) {
        return `CONTACT.VALIDATION.${fieldName.toUpperCase()}_MIN_LENGTH`;
      }
    }
    return '';
  }
}
