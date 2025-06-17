import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/candidates/candidates.routes'),
    title: 'Candidates',
  },
];
