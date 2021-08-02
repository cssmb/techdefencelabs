import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorporateProfileComponent } from './corporate-profile/corporate-profile.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { HallFameComponent } from './hall-fame/hall-fame.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PartnersAlliancesComponent } from './partners-alliances/partners-alliances.component';


const routes: Routes = [
    {path: 'corporate-profile', component: CorporateProfileComponent},
    {path: 'team', component: TeamComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'careers', component: CareersComponent},
    {path: 'news', component: NewsComponent},
    {path: 'hall-fame', component: HallFameComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'partners-alliances', component: PartnersAlliancesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
