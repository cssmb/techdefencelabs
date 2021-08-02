import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CorporateProfileComponent } from './corporate-profile/corporate-profile.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { HallFameComponent } from './hall-fame/hall-fame.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PartnersAlliancesComponent } from './partners-alliances/partners-alliances.component';


@NgModule({
  declarations: [
    CorporateProfileComponent,
    TeamComponent,
    ClientsComponent,
    CareersComponent,
    NewsComponent,
    HallFameComponent,
    TestimonialsComponent,
    PartnersAlliancesComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
