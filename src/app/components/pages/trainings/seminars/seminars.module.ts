import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeminarsRoutingModule } from './seminars-routing.module';
import { CyberSecurityAwarenessComponent } from './cyber-security-awareness/cyber-security-awareness.component';


@NgModule({
  declarations: [
    CyberSecurityAwarenessComponent
  ],
  imports: [
    CommonModule,
    SeminarsRoutingModule
  ]
})
export class SeminarsModule { }
