import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidates.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
  ) {}

  async getCandidates(): Promise<Candidate[]> {
    return await this.candidateRepository.find();
  }

  async createCandidate(candidate: Omit<Candidate, 'id'>): Promise<Candidate> {
    const newCandidate = this.candidateRepository.create(candidate);
    await this.candidateRepository.save(newCandidate);
    return newCandidate;
  }
}
