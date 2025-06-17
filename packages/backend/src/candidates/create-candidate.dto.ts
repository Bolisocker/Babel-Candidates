import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCandidateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly surname: string;

}
