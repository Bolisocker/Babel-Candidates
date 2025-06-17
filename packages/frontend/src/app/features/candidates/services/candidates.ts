import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, Observable, of } from 'rxjs';
import { Candidate, CandidateBody } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Candidates {
  readonly #http = inject(HttpClient);
  readonly #apiEndpoint = environment.apiEndpoint;

  loadCandidates(): Observable<Candidate[]> {
    return this.#http.get<Candidate[]>(`${this.#apiEndpoint}/candidates`).pipe(
      catchError((error) => {
        console.error('Error loading candidates', error);
        return of([]);
      }),
    );
  }

  createCandidate(newCandidate: CandidateBody): Observable<Candidate> {
    const { name, surname, file } = newCandidate;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('file', file);
    return this.#http.post<Candidate>(
      `${this.#apiEndpoint}/candidates`,
      formData,
    );
  }
}
