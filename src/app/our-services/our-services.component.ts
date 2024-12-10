import { Component } from '@angular/core';
import { SERVICES_LIST } from '../shared/configs/general-values';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
})
export class OurServicesComponent {
  public servicesList:any = SERVICES_LIST;

  constructor() {
    console.log(this.servicesList)
  }

}
