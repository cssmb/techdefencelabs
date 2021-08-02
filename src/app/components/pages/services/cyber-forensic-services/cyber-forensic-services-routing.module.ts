import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CyberCrimeInvestigationComponent } from './cyber-crime-investigation/cyber-crime-investigation.component';
import { ComputerMobileDevicesForensicsComponent } from './computer-mobile-devices-forensics/computer-mobile-devices-forensics.component';

const routes: Routes = [
    {path: 'cyber-crime-investigation', component: CyberCrimeInvestigationComponent},
    {path: 'computer-mobile-devices-forensics', component: ComputerMobileDevicesForensicsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyberForensicServicesRoutingModule { }
