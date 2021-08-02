import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateTrainingsRoutingModule } from './corporate-trainings-routing.module';
import { WebApplicationsSecurityComponent } from './web-applications-security/web-applications-security.component';
import { MobileApplicationSecurityComponent } from './mobile-application-security/mobile-application-security.component';
import { WindowsDefenderAtpComponent } from './windows-defender-atp/windows-defender-atp.component';
import { SplunkFundamentalsLevelComponent } from './splunk-fundamentals-level/splunk-fundamentals-level.component';
import { AzureDataBrickLakeSecurityComponent } from './azure-data-brick-lake-security/azure-data-brick-lake-security.component';
import { ElkStackTrainingComponent } from './elk-stack-training/elk-stack-training.component';
import { IsoTrainingComponent } from './iso-training/iso-training.component';
import { RbiCyberSecurityComplianceComponent } from './rbi-cyber-security-compliance/rbi-cyber-security-compliance.component';


@NgModule({
  declarations: [
    WebApplicationsSecurityComponent,
    MobileApplicationSecurityComponent,
    WindowsDefenderAtpComponent,
    SplunkFundamentalsLevelComponent,
    AzureDataBrickLakeSecurityComponent,
    ElkStackTrainingComponent,
    IsoTrainingComponent,
    RbiCyberSecurityComplianceComponent
  ],
  imports: [
    CommonModule,
    CorporateTrainingsRoutingModule
  ]
})
export class CorporateTrainingsModule { }
