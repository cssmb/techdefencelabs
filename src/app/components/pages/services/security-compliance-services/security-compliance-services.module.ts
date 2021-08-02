import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityComplianceServicesRoutingModule } from './security-compliance-services-routing.module';
import { CyberRiskGapMaturityAssessmentComponent } from './cyber-risk-gap-maturity-assessment/cyber-risk-gap-maturity-assessment.component';
import { IsoComplianceComponent } from './iso-compliance/iso-compliance.component';
import { RbiCyberSecurityComplianceComponent } from './rbi-cyber-security-compliance/rbi-cyber-security-compliance.component';
import { IsnpComplianceComponent } from './isnp-compliance/isnp-compliance.component';
import { GdprImplementationAndReadinessComponent } from './gdpr-implementation-and-readiness/gdpr-implementation-and-readiness.component';
import { NabardCyberSecurityFrameworkComponent } from './nabard-cyber-security-framework/nabard-cyber-security-framework.component';
import { CyberInsuranceConsultingComponent } from './cyber-insurance-consulting/cyber-insurance-consulting.component';
import { SebiCyberSecurityFrameworkComponent } from './sebi-cyber-security-framework/sebi-cyber-security-framework.component';
import { SoxComplianceComponent } from './sox-compliance/sox-compliance.component';
import { PciDssComplianceComponent } from './pci-dss-compliance/pci-dss-compliance.component';


@NgModule({
  declarations: [
    CyberRiskGapMaturityAssessmentComponent,
    IsoComplianceComponent,
    RbiCyberSecurityComplianceComponent,
    IsnpComplianceComponent,
    GdprImplementationAndReadinessComponent,
    NabardCyberSecurityFrameworkComponent,
    CyberInsuranceConsultingComponent,
    SebiCyberSecurityFrameworkComponent,
    SoxComplianceComponent,
    PciDssComplianceComponent
  ],
  imports: [
    CommonModule,
    SecurityComplianceServicesRoutingModule
  ]
})
export class SecurityComplianceServicesModule { }
