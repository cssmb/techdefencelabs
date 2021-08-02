import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CyberSecurityDigitalForensicsComponent } from './cyber-security-digital-forensics/cyber-security-digital-forensics.component';
import { InformationSecurityIncidentResponseComponent } from './information-security-incident-response/information-security-incident-response.component';
import { DigitalForensicsComponent } from './digital-forensics/digital-forensics.component';
import { EthicalHackingCyberSecurityComponent } from './ethical-hacking-cyber-security/ethical-hacking-cyber-security.component';
import { SecurityOperationCenterAnalystComponent } from './security-operation-center-analyst/security-operation-center-analyst.component';
import { InformationSecurityAuditsGovernanceComponent } from './information-security-audits-governance/information-security-audits-governance.component';
import { MalwareAnalysisReverseEngineeringComponent } from './malware-analysis-reverse-engineering/malware-analysis-reverse-engineering.component';
import { IotSecurityComponent } from './iot-security/iot-security.component';
import { ApplicationSecurityComponent } from './application-security/application-security.component';
import { VaptComponent } from './vapt/vapt.component';
import { MemoryForensicsComponent } from './memory-forensics/memory-forensics.component';

import { CyberSecurityForensicsComponent } from './cyber-security-forensics/cyber-security-forensics.component';


const routes: Routes = [
    {path: 'cyber-security-digital-forensics', component: CyberSecurityDigitalForensicsComponent},
    {path: 'cyber-security-forensics', component: CyberSecurityForensicsComponent},
    {path: 'information-security-incident-response', component: InformationSecurityIncidentResponseComponent},
    {path: 'digital-forensics', component: DigitalForensicsComponent},
    {path: 'ethical-hacking-cyber-security', component: EthicalHackingCyberSecurityComponent},
    {path: 'security-operation-center-analyst', component: SecurityOperationCenterAnalystComponent},
    {path: 'information-security-audits-governance', component: InformationSecurityAuditsGovernanceComponent},
    {path: 'malware-analysis-reverse-engineering', component: MalwareAnalysisReverseEngineeringComponent},
    {path: 'application-security', component: ApplicationSecurityComponent},
    {path: 'iot-security', component: IotSecurityComponent},
    {path: 'vapt', component: VaptComponent},
    {path: 'memory-forensics', component: MemoryForensicsComponent},
];

@NgModule({
  	imports: [CommonModule,RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class CourseRoutingModule { }
