import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PartnerUniversityComponent} from './partner-university/partner-university.component';
import {TrainingCalendarRegistractionComponent} from './training-calendar-registraction/training-calendar-registraction.component';

const routes: Routes = [
	{
        path: 'certifications',
        loadChildren: () => import('./certifications/certifications.module').then(m => m.CertificationsModule)
    },
    {
        path: 'corporate-trainings',
        loadChildren: () => import('./corporate-trainings/corporate-trainings.module').then(m => m.CorporateTrainingsModule)
    },
    {
        path: 'partner-university',
        component:PartnerUniversityComponent	
    },
    {
        path: 'seminars',
        loadChildren: () => import('./seminars/seminars.module').then(m => m.SeminarsModule)
    },
    {
        path: 'training-calendar-registraction',
        component:PartnerUniversityComponent	
    },
    {
        path: 'ugpg-programs',
        loadChildren: () => import('./ugpg-programs/ugpg-programs.module').then(m => m.UGPGProgramsModule)
    },
    {
        path: 'workshops-bootcamps',
        loadChildren: () => import('./workshops-bootcamps/workshops-bootcamps.module').then(m => m.WorkshopsBootcampsModule)
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }
