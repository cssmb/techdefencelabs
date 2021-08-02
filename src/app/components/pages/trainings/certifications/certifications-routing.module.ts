import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CyberSecurityExpertComponent } from './cyber-security-expert/cyber-security-expert.component';
import { WebApplicationSecurityExpertComponent } from './web-application-security-expert/web-application-security-expert.component';
import { MobileApplicationSecurityExpertComponent } from './mobile-application-security-expert/mobile-application-security-expert.component';
import { SocAnalystComponent } from './soc-analyst/soc-analyst.component';
import { InformationSecurityAuditorComponent } from './information-security-auditor/information-security-auditor.component';
import { MalwareAnalystComponent } from './malware-analyst/malware-analyst.component';
import { CyberCrimeInvestigationForensicsExpertComponent } from './cyber-crime-investigation-forensics-expert/cyber-crime-investigation-forensics-expert.component';
import { DiplomaCyberSecurityComponent } from './diploma-cyber-security/diploma-cyber-security.component';

const routes: Routes = [
    {path: 'cyber-security-expert', component: CyberSecurityExpertComponent},
    {path: 'web-application-security-expert', component: WebApplicationSecurityExpertComponent},
    {path: 'mobile-application-security-expert', component: MobileApplicationSecurityExpertComponent},
    {path: 'soc-analyst', component: SocAnalystComponent},
    {path: 'information-security-auditor', component: InformationSecurityAuditorComponent},
    {path: 'malware-analyst', component: MalwareAnalystComponent },
    {path: 'cyber-crime-investigation-forensics-expert', component: CyberCrimeInvestigationForensicsExpertComponent},
    {path: 'diploma-cyber-security', component: DiplomaCyberSecurityComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsRoutingModule { }
