import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { MessageFromManagerComponent } from './message-from-manager/message-from-manager.component';
import { OurValuesComponent } from './our-values/our-values.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurClientsComponent } from './shared/components/our-clients/clients.component';
import { ElectricComponent } from './our-services/components/electric-component/electric.component';
import { PlumbingComponent } from './our-services/components/plumbing-component/plumbing-component';
import { MechanicalComponent } from './our-services/components/mechanical-component/mechanical.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'mission',
    component:OurMissionComponent
  },
  {
    path:'vision',
    component:OurVisionComponent
  },
  {
    path:'values',
    component:OurValuesComponent
  },
  {
    path:'message',
    component:MessageFromManagerComponent
  },
  {
    path:'services',
    component:OurServicesComponent
  },
  {
    path:'electrical',
    component:ElectricComponent
  },
  {
    path:'plumbing',
    component:PlumbingComponent
  },
  {
    path:'mechanical',
    component:MechanicalComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'clients',
    component:OurClientsComponent
  },
  {
    path:'completed-projects',
    component:OurProjectsComponent
  },
  {
    path:'ongoing-projects',
    component:OurProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
  providers:[{provide:LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppRoutingModule { }
