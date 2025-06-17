export interface Candidate {
  name: string;
  surname: string;
  seniority: 'junior' | 'senior';
  experience: number;
  availability: boolean;
}

export interface CandidateBody extends Pick<Candidate, 'name' | 'surname'> {
  file: File;
}
