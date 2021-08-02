import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { BlogComponent } from './blog/blog.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SecurityAdvisoriesComponent } from './security-advisories/security-advisories.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';


@NgModule({
  declarations: [
    BlogComponent,
    TechNewsComponent,
    SecurityAdvisoriesComponent,
    CaseStudiesComponent,
    WhitepapersComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
