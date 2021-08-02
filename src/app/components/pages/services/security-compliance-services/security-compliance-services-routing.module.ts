import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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



const routes: Routes = [
    {path: 'cyber-risk-gap-maturity-assessment', component: CyberRiskGapMaturityAssessmentComponent},
    {path: 'iso-compliance', component: IsoComplianceComponent},
    {path: 'rbi-cyber-security-compliance', component: RbiCyberSecurityComplianceComponent},
    {path: 'isnp-compliance', component: IsnpComplianceComponent},
    {path: 'gdpr-implementation-and-readiness', component: GdprImplementationAndReadinessComponent},
    {path: 'nabard-cyber-security-framework', component: NabardCyberSecurityFrameworkComponent},
    {path: 'cyber-insurance-consulting', component: CyberInsuranceConsultingComponent},
    {path: 'sebi-cyber-security-framework', component: SebiCyberSecurityFrameworkComponent},
    {path: 'sox-compliance', component: SoxComplianceComponent},
    {path: 'pci-dss-compliance', component: PciDssComplianceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityComplianceServicesRoutingModule { }
