import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtIcsCyberSecurityAssessmentComponent } from './ot-ics-cyber-security-assessment/ot-ics-cyber-security-assessment.component';

const routes: Routes = [
    {path: 'ot-ics-cyber-security-assessment', component: OtIcsCyberSecurityAssessmentComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityAssessmentServicesOtRoutingModule { }
