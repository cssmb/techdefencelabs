import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UGPGProgramsRoutingModule } from './ugpg-programs-routing.module';
import { BtechCyberSecurityComponent } from './btech-cyber-security/btech-cyber-security.component';
import { MscCyberSecurityDigitalForensicsComponent } from './msc-cyber-security-digital-forensics/msc-cyber-security-digital-forensics.component';
import { PgdiplomaCyberSecurityComponent } from './pgdiploma-cyber-security/pgdiploma-cyber-security.component';
import { MtechCyberSecurityComponent } from './mtech-cyber-security/mtech-cyber-security.component';


@NgModule({
  declarations: [
    BtechCyberSecurityComponent,
    MscCyberSecurityDigitalForensicsComponent,
    PgdiplomaCyberSecurityComponent,
    MtechCyberSecurityComponent
  ],
  imports: [
    CommonModule,
    UGPGProgramsRoutingModule
  ]
})
export class UGPGProgramsModule { }
