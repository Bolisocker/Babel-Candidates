import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateForm } from '../../components/candidate-form/candidate-form';
import { Header } from '../../components/header/header';
import { CandidatesTable } from '../../components/candidates-table/candidates-table';
import { Candidate } from '../../models';
import { firstValueFrom, take } from 'rxjs';
import { Candidates } from '../../services/candidates';

@Component({
  selector: 'app-candidates-page',
  imports: [Header, CandidatesTable],
  templateUrl: './candidates-page.html',
  styleUrl: './candidates-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidatesPage implements OnInit {
  readonly #candidates = inject(Candidates);
  readonly #dialog = inject(MatDialog);
  candidates = signal<Candidate[]>([]);

  ngOnInit(): void {
    this.#candidates
      .loadCandidates()
      .pipe(take(1))
      .subscribe((candidates) => this.candidates.set(candidates));
  }

  async showCandidateFormDialog() {
    const newCandidate = await firstValueFrom(
      this.#dialog
        .open<CandidateForm, void, Candidate>(CandidateForm)
        .afterClosed(),
    );
    if (newCandidate) {
      this.candidates.update((candidates) => [...candidates, newCandidate]);
    }
  }
}
