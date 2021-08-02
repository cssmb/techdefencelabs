import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingCalendarRegistractionComponent } from './training-calendar-registraction/training-calendar-registraction.component';
import { PartnerUniversityComponent } from './partner-university/partner-university.component';


@NgModule({
  declarations: [
    TrainingCalendarRegistractionComponent,
    PartnerUniversityComponent
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule
  ]
})
export class TrainingsModule { }
