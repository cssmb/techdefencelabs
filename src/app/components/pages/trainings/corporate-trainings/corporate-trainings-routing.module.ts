import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebApplicationsSecurityComponent } from './web-applications-security/web-applications-security.component';
import { MobileApplicationSecurityComponent } from './mobile-application-security/mobile-application-security.component';
import { WindowsDefenderAtpComponent } from './windows-defender-atp/windows-defender-atp.component';
import { SplunkFundamentalsLevelComponent } from './splunk-fundamentals-level/splunk-fundamentals-level.component';
import { AzureDataBrickLakeSecurityComponent } from './azure-data-brick-lake-security/azure-data-brick-lake-security.component';
import { ElkStackTrainingComponent } from './elk-stack-training/elk-stack-training.component';
import { IsoTrainingComponent } from './iso-training/iso-training.component';
import { RbiCyberSecurityComplianceComponent } from './rbi-cyber-security-compliance/rbi-cyber-security-compliance.component';

const routes: Routes = [
    {path: 'web-applications-security', component: WebApplicationsSecurityComponent},
    {path: 'mobile-application-security', component: MobileApplicationSecurityComponent},
    {path: 'windows-defender-atp', component: WindowsDefenderAtpComponent},
    {path: 'splunk-fundamentals-level', component: SplunkFundamentalsLevelComponent},
    {path: 'azure-data-brick-lake-security', component: AzureDataBrickLakeSecurityComponent},
    {path: 'elk-stack-training', component: ElkStackTrainingComponent},
    {path: 'iso-training', component: IsoTrainingComponent},
    {path: 'rbi-cyber-security-compliance', component: RbiCyberSecurityComplianceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateTrainingsRoutingModule { }
