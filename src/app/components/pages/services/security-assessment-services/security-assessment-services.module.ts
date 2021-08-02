import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityAssessmentServicesRoutingModule } from './security-assessment-services-routing.module';
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


@NgModule({
  declarations: [
    WebApplicationSecurityAssessmentComponent,
    MobileApplicationSecurityAssessmentComponent,
    ThickClientSecurityAssessmentComponent,
    NetworkItInfrastructureSecurityAssessmentComponent,
    CloudSecurityAssessmentComponent,
    WirelessSecurityAssessmentComponent,
    SourceCodeReviewComponent,
    ItInfrastructureConfigurationReviewComponent,
    ServerEndpointsHardeningComponent,
    HardwareDevicesSecurityAssessmentComponent,
    IoTSecurityAssessmentComponent,
    ProductSecurityAssessmentComponent
  ],
  imports: [
    CommonModule,
    SecurityAssessmentServicesRoutingModule
  ]
})
export class SecurityAssessmentServicesModule { }
