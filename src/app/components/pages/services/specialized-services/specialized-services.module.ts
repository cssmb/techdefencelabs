import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecializedServicesRoutingModule } from './specialized-services-routing.module';
import { SocialEngineeringComponent } from './social-engineering/social-engineering.component';
import { RedTeamingComponent } from './red-teaming/red-teaming.component';
import { VirtualCisoComponent } from './virtual-ciso/virtual-ciso.component';
import { CompromiseAssessmentComponent } from './compromise-assessment/compromise-assessment.component';
import { PhishingRansomwareSimulationsComponent } from './phishing-ransomware-simulations/phishing-ransomware-simulations.component';
import { MalwareAnalysisComponent } from './malware-analysis/malware-analysis.component';


@NgModule({
  declarations: [
    SocialEngineeringComponent,
    RedTeamingComponent,
    VirtualCisoComponent,
    CompromiseAssessmentComponent,
    PhishingRansomwareSimulationsComponent,
    MalwareAnalysisComponent
  ],
  imports: [
    CommonModule,
    SpecializedServicesRoutingModule
  ]
})
export class SpecializedServicesModule { }
