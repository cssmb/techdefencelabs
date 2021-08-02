import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EthicalHackingExpertLevel2Component } from './ethical-hacking-expert-level2/ethical-hacking-expert-level2.component';
import { EthicalHackingExpertLevel1Component } from './ethical-hacking-expert-level1/ethical-hacking-expert-level1.component';
import { DigitalForensicsExpertLevel1Component } from './digital-forensics-expert-level1/digital-forensics-expert-level1.component';
import { DigitalForensicsExpertLevel2Component } from './digital-forensics-expert-level2/digital-forensics-expert-level2.component';


const routes: Routes = [
    {path: 'ethical-hacking-expert-level1', component: EthicalHackingExpertLevel1Component},
    {path: 'ethical-hacking-expert-level2', component: EthicalHackingExpertLevel2Component},
    {path: 'digital-forensics-expert-level1', component: DigitalForensicsExpertLevel1Component},
    {path: 'digital-forensics-expert-level2', component: DigitalForensicsExpertLevel2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopsBootcampsRoutingModule { }
