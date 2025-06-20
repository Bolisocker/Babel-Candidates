import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesPage } from './candidates-page';

describe('CandidatesPage', () => {
  let component: CandidatesPage;
  let fixture: ComponentFixture<CandidatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
