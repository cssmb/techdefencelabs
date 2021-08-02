import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SecurityAdvisoriesComponent } from './security-advisories/security-advisories.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';


const routes: Routes = [
    {path: 'blog', component: BlogComponent},
    {path: 'tech-news', component: TechNewsComponent},
    {path: 'security-advisories', component: SecurityAdvisoriesComponent},
    {path: 'case-studies', component: CaseStudiesComponent},
    {path: 'whitepapers', component: WhitepapersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
