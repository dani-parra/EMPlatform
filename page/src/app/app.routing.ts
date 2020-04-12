import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CleanStructureComponent } from './layouts/clean-structure/clean-structure/clean-structure.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: CleanStructureComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/clean-structure/clean-structure.module#CleanStructureModule'
      }
    ]
  },
  {
    path: 'asd',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  }
]
