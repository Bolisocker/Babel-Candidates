import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Candidate } from './candidates/candidates.entity';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Candidate],
      synchronize: true, // Remove for production
    }),
    CandidatesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
