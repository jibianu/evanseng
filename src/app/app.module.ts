import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { MessageFromManagerComponent } from './message-from-manager/message-from-manager.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from './shared/shared.module';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurValuesComponent } from './our-values/our-values.component';
import { CommonModule } from '@angular/common';
import { OurServicesModule } from './our-services/services.module';
import { OurProjectsComponent } from './our-projects/our-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    OurVisionComponent,
    MessageFromManagerComponent,
    ContactUsComponent,
    OurMissionComponent,
    OurValuesComponent,
    OurProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    OurServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
