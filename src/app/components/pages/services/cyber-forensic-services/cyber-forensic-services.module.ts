import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberForensicServicesRoutingModule } from './cyber-forensic-services-routing.module';
import { CyberCrimeInvestigationComponent } from './cyber-crime-investigation/cyber-crime-investigation.component';
import { ComputerMobileDevicesForensicsComponent } from './computer-mobile-devices-forensics/computer-mobile-devices-forensics.component';


@NgModule({
  declarations: [
    CyberCrimeInvestigationComponent,
    ComputerMobileDevicesForensicsComponent
  ],
  imports: [
    CommonModule,
    CyberForensicServicesRoutingModule
  ]
})
export class CyberForensicServicesModule { }
