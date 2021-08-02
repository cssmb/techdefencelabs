import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
        path: 'cyber-forensic-service',
        loadChildren: () => import('./cyber-forensic-services/cyber-forensic-services.module').then(m => m.CyberForensicServicesModule)
    },
    {
        path: 'cyber-security-service',
        loadChildren: () => import('./cyber-security-services/cyber-security-services.module').then(m => m.CyberSecurityServicesModule)
    },
    {
        path: 'security-assessment-service',
        loadChildren: () => import('./security-assessment-services/security-assessment-services.module').then(m => m.SecurityAssessmentServicesModule)
    },
    {
        path: 'security-assessment-service-ot',
        loadChildren: () => import('./security-assessment-services-ot/security-assessment-services-ot.module').then(m => m.SecurityAssessmentServicesOtModule)
    },
    {
        path: 'security-compliance-service',
        loadChildren: () => import('./security-compliance-services/security-compliance-services.module').then(m => m.SecurityComplianceServicesModule)
    },
    {
        path: 'specialized-service',
        loadChildren: () => import('./specialized-services/specialized-services.module').then(m => m.SpecializedServicesModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
