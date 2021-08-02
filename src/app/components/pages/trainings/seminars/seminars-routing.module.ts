import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CyberSecurityAwarenessComponent } from './cyber-security-awareness/cyber-security-awareness.component';

const routes: Routes = [
    {path: 'cyber-security-awareness', component: CyberSecurityAwarenessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeminarsRoutingModule { }
