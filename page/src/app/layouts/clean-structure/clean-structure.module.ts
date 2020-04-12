import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../pages/login/login.component';
import { RouterModule } from '@angular/router';
import { CleanLayoutRoutes } from './clean-layout.routing';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CleanLayoutRoutes)
  ]
})
export class CleanStructureModule { }
