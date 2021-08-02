import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebApplicationSecurityAssessmentComponent } from './web-application-security-assessment/web-application-security-assessment.component';
import { MobileApplicationSecurityAssessmentComponent } from './mobile-application-security-assessment/mobile-application-security-assessment.component';
import { ThickClientSecurityAssessmentComponent } from './thick-client-security-assessment/thick-client-security-assessment.component';
import { NetworkItInfrastructureSecurityAssessmentComponent } from './network-it-infrastructure-security-assessment/network-it-infrastructure-security-assessment.component';
import { CloudSecurityAssessmentComponent } from './cloud-security-assessment/cloud-security-assessment.component';
import { WirelessSecurityAssessmentComponent } from './wireless-security-assessment/wireless-security-assessment.component';
import { SourceCodeReviewComponent } from './source-code-review/source-code-review.component';
import { ItInfrastructureConfigurationReviewComponent } from './it-infrastructure-configuration-review/it-infrastructure-configuration-review.component';
import { ServerEndpointsHardeningComponent } from './server-endpoints-hardening/server-endpoints-hardening.component';
import { HardwareDevicesSecurityAssessmentComponent } from './hardware-devices-security-assessment/hardware-devices-security-assessment.component';
import { IoTSecurityAssessmentComponent } from './iot-security-assessment/iot-security-assessment.component';
import { ProductSecurityAssessmentComponent } from './product-security-assessment/product-security-assessment.component';

const routes: Routes = [
    {path: 'web-application-security-assessment', component: WebApplicationSecurityAssessmentComponent},
    {path: 'mobile-application-security-assessment', component: MobileApplicationSecurityAssessmentComponent},
    {path: 'thick-client-security-assessment', component: ThickClientSecurityAssessmentComponent},
    {path: 'network-it-infrastructure-security-assessment', component: NetworkItInfrastructureSecurityAssessmentComponent},
    {path: 'cloud-security-assessment', component: CloudSecurityAssessmentComponent},
    {path: 'wireless-security-assessment', component: WirelessSecurityAssessmentComponent},
    {path: 'source-code-review', component: SourceCodeReviewComponent},
    {path: 'it-infrastructure-configuration-review', component: ItInfrastructureConfigurationReviewComponent},
    {path: 'server-endpoints-hardening', component: ServerEndpointsHardeningComponent},
    {path: 'hardware-devices-security-assessment', component: HardwareDevicesSecurityAssessmentComponent},
    {path: 'iot-security-assessment', component: IoTSecurityAssessmentComponent},
    {path: 'product-security-assessment', component: ProductSecurityAssessmentComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityAssessmentServicesRoutingModule { }
