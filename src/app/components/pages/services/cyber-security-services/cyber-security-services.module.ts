import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberSecurityServicesRoutingModule } from './cyber-security-services-routing.module';
import { CyberSecurityAssuranceComplianceComponent } from './cyber-security-assurance-compliance/cyber-security-assurance-compliance.component';
import { VulnerabilityManagementComponent } from './vulnerability-management/vulnerability-management.component';
import { SecurityOperationCenterServicesComponent } from './security-operation-center-services/security-operation-center-services.component';
import { CyberSecurityGovernanceComponent } from './cyber-security-governance/cyber-security-governance.component';
import { EndpointSecurityServicesComponent } from './endpoint-security-services/endpoint-security-services.component';
import { FirewallManagementServicesComponent } from './firewall-management-services/firewall-management-services.component';
import { PatchManagementServicesComponent } from './patch-management-services/patch-management-services.component';


@NgModule({
  declarations: [
    CyberSecurityAssuranceComplianceComponent,
    VulnerabilityManagementComponent,
    SecurityOperationCenterServicesComponent,
    CyberSecurityGovernanceComponent,
    EndpointSecurityServicesComponent,
    FirewallManagementServicesComponent,
    PatchManagementServicesComponent
  ],
  imports: [
    CommonModule,
    CyberSecurityServicesRoutingModule
  ]
})
export class CyberSecurityServicesModule { }
