import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  seniority: 'junior' | 'senior';

  @Column()
  experience: number;

  @Column()
  availability: boolean;
}
