import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopsBootcampsRoutingModule } from './workshops-bootcamps-routing.module';
import { EthicalHackingExpertLevel2Component } from './ethical-hacking-expert-level2/ethical-hacking-expert-level2.component';
import { EthicalHackingExpertLevel1Component } from './ethical-hacking-expert-level1/ethical-hacking-expert-level1.component';
import { DigitalForensicsExpertLevel1Component } from './digital-forensics-expert-level1/digital-forensics-expert-level1.component';
import { DigitalForensicsExpertLevel2Component } from './digital-forensics-expert-level2/digital-forensics-expert-level2.component';


@NgModule({
  declarations: [
    EthicalHackingExpertLevel2Component,
    EthicalHackingExpertLevel1Component,
    DigitalForensicsExpertLevel1Component,
    DigitalForensicsExpertLevel2Component
  ],
  imports: [
    CommonModule,
    WorkshopsBootcampsRoutingModule
  ]
})
export class WorkshopsBootcampsModule { }
