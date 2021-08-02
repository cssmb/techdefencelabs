import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CourseRoutingModule } from './course-routing.module';
import { CyberSecurityForensicsComponent } from './cyber-security-forensics/cyber-security-forensics.component';




@NgModule({
  declarations: [
    CyberSecurityDigitalForensicsComponent,
    InformationSecurityIncidentResponseComponent,
    DigitalForensicsComponent,
    EthicalHackingCyberSecurityComponent,
    SecurityOperationCenterAnalystComponent,
    InformationSecurityAuditsGovernanceComponent,
    MalwareAnalysisReverseEngineeringComponent,
    IotSecurityComponent,
    ApplicationSecurityComponent,
    VaptComponent,
    MemoryForensicsComponent,
    CyberSecurityForensicsComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
