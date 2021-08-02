import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocialEngineeringComponent } from './social-engineering/social-engineering.component';
import { RedTeamingComponent } from './red-teaming/red-teaming.component';
import { VirtualCisoComponent } from './virtual-ciso/virtual-ciso.component';
import { CompromiseAssessmentComponent } from './compromise-assessment/compromise-assessment.component';
import { PhishingRansomwareSimulationsComponent } from './phishing-ransomware-simulations/phishing-ransomware-simulations.component';
import { MalwareAnalysisComponent } from './malware-analysis/malware-analysis.component';

const routes: Routes = [
    {path: 'social-engineering', component: SocialEngineeringComponent},
    {path: 'red-teaming', component: RedTeamingComponent },
    {path: 'virtual-ciso', component: VirtualCisoComponent},
    {path: 'compromise-assessment', component: CompromiseAssessmentComponent},
    {path: 'phishing-ransomware-simulations', component: PhishingRansomwareSimulationsComponent},
    {path: 'malware-analysis', component: MalwareAnalysisComponent},
    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecializedServicesRoutingModule { }
