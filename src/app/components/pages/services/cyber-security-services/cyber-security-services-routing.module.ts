import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CyberSecurityAssuranceComplianceComponent } from './cyber-security-assurance-compliance/cyber-security-assurance-compliance.component';
import { VulnerabilityManagementComponent } from './vulnerability-management/vulnerability-management.component';
import { SecurityOperationCenterServicesComponent } from './security-operation-center-services/security-operation-center-services.component';
import { CyberSecurityGovernanceComponent } from './cyber-security-governance/cyber-security-governance.component';
import { EndpointSecurityServicesComponent } from './endpoint-security-services/endpoint-security-services.component';
import { FirewallManagementServicesComponent } from './firewall-management-services/firewall-management-services.component';
import { PatchManagementServicesComponent } from './patch-management-services/patch-management-services.component';


const routes: Routes = [
    {path: 'cyber-security-assurance-compliance', component: CyberSecurityAssuranceComplianceComponent},
    {path: 'vulnerability-management', component: VulnerabilityManagementComponent},
    {path: 'security-operation-center-services', component: SecurityOperationCenterServicesComponent},
    {path: 'cyber-security-governance', component:CyberSecurityGovernanceComponent},
    {path: 'endpoint-security-services', component: EndpointSecurityServicesComponent},
    {path: 'firewall-management-services', component: FirewallManagementServicesComponent},
    {path: 'patch-management-services', component: PatchManagementServicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyberSecurityServicesRoutingModule { }
