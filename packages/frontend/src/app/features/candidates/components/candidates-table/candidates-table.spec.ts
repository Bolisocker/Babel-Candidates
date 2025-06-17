import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesTable } from './candidates-table';

describe('CandidatesTable', () => {
  let component: CandidatesTable;
  let fixture: ComponentFixture<CandidatesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
