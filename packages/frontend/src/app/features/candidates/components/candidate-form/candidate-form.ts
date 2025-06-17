import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Candidates } from '../../services/candidates';

@Component({
  selector: 'app-candidate-form',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatError,
    MatInputModule,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './candidate-form.html',
  styleUrl: './candidate-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateForm {
  readonly #fb = inject(FormBuilder);
  readonly #candidates = inject(Candidates);
  readonly #dialogRef = inject(MatDialogRef);

  candidateForm = this.#fb.group({
    name: this.#fb.nonNullable.control('', Validators.required),
    surname: this.#fb.nonNullable.control('', Validators.required),
    file: this.#fb.control<File | null>(null, Validators.required),
  });

  selectedFile: File | null = null;

  onFileChange(event: Event) {
    this.selectedFile = (<HTMLInputElement>event.target).files?.[0] ?? null;
  }

  onSubmit() {
    if (this.candidateForm.invalid || !this.selectedFile) {
      return;
    }
    const { name, surname } = this.candidateForm.getRawValue();
    this.#candidates
      .createCandidate({ name, surname, file: this.selectedFile })
      .subscribe((candidate) => this.#dialogRef.close(candidate));
  }
}
