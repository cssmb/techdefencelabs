import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityAssessmentServicesOtRoutingModule } from './security-assessment-services-ot-routing.module';
import { OtIcsCyberSecurityAssessmentComponent } from './ot-ics-cyber-security-assessment/ot-ics-cyber-security-assessment.component';


@NgModule({
  declarations: [
    OtIcsCyberSecurityAssessmentComponent
  ],
  imports: [
    CommonModule,
    SecurityAssessmentServicesOtRoutingModule
  ]
})
export class SecurityAssessmentServicesOtModule { }
