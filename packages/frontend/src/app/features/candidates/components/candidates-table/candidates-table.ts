import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Candidate } from '../../models';
import { MatIcon } from '@angular/material/icon';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-candidates-table',
  imports: [MatTableModule, MatIcon, TitleCasePipe],
  templateUrl: './candidates-table.html',
  styleUrl: './candidates-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidatesTable {
  candidates = input<Candidate[]>([]);
  headers = ['name', 'surname', 'seniority','experience', 'availability']
}
