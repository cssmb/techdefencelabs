import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BtechCyberSecurityComponent } from './btech-cyber-security/btech-cyber-security.component';
import { MscCyberSecurityDigitalForensicsComponent } from './msc-cyber-security-digital-forensics/msc-cyber-security-digital-forensics.component';
import { PgdiplomaCyberSecurityComponent } from './pgdiploma-cyber-security/pgdiploma-cyber-security.component';
import { MtechCyberSecurityComponent } from './mtech-cyber-security/mtech-cyber-security.component';


const routes: Routes = [
    {path: 'btech-cyber-security', component: BtechCyberSecurityComponent},
    {path: 'msc-cyber-security-digital-forensics', component: MscCyberSecurityDigitalForensicsComponent},
    {path: 'pgdiploma-cyber-security', component: PgdiplomaCyberSecurityComponent},
    {path: 'mtech-cyber-security', component: MtechCyberSecurityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UGPGProgramsRoutingModule { }
