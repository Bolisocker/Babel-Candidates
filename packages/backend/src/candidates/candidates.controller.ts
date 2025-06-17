import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as xlsx from 'xlsx';
import { Candidate } from './candidates.entity';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './create-candidate.dto';

@Controller('/candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  async getCandidates(): Promise<Candidate[]> {
    return await this.candidatesService.getCandidates();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createCandidate(
    @Body() createCandidateDto: CreateCandidateDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Candidate> {
    const xlsxFile = xlsx.read(file.buffer, { type: 'buffer' });
    const [row] = xlsx.utils.sheet_to_json<
      Pick<Candidate, 'seniority' | 'experience' | 'availability'>
    >(xlsxFile.Sheets[xlsxFile.SheetNames[0]], {
      header: ['seniority', 'experience', 'availability'],
    });
    if (!row) {
      throw new BadRequestException('Invalid Excel file provided');
    }
    const { name, surname } = createCandidateDto;
    const { seniority, experience } = row;
    return this.candidatesService.createCandidate({
      name,
      surname,
      seniority,
      experience,
      availability: String(row.availability) === 'true',
    });
  }
}
