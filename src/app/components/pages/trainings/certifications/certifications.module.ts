import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CyberSecurityExpertComponent } from './cyber-security-expert/cyber-security-expert.component';
import { WebApplicationSecurityExpertComponent } from './web-application-security-expert/web-application-security-expert.component';
import { MobileApplicationSecurityExpertComponent } from './mobile-application-security-expert/mobile-application-security-expert.component';
import { SocAnalystComponent } from './soc-analyst/soc-analyst.component';
import { InformationSecurityAuditorComponent } from './information-security-auditor/information-security-auditor.component';
import { MalwareAnalystComponent } from './malware-analyst/malware-analyst.component';
import { CyberCrimeInvestigationForensicsExpertComponent } from './cyber-crime-investigation-forensics-expert/cyber-crime-investigation-forensics-expert.component';
import { DiplomaCyberSecurityComponent } from './diploma-cyber-security/diploma-cyber-security.component';


@NgModule({
  declarations: [
    CyberSecurityExpertComponent,
    WebApplicationSecurityExpertComponent,
    MobileApplicationSecurityExpertComponent,
    SocAnalystComponent,
    InformationSecurityAuditorComponent,
    MalwareAnalystComponent,
    CyberCrimeInvestigationForensicsExpertComponent,
    DiplomaCyberSecurityComponent
  ],
  imports: [
    CommonModule,
    CertificationsRoutingModule
  ]
})
export class CertificationsModule { }
