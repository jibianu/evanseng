import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OurServicesComponent } from "./our-services.component";
import { ElectricComponent } from "./components/electric-component/electric.component";
import { PlumbingComponent } from "./components/plumbing-component/plumbing-component";
import { MechanicalComponent } from "./components/mechanical-component/mechanical.component";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        OurServicesComponent,
        ElectricComponent,
        PlumbingComponent,
        MechanicalComponent
    ],
    exports: [
    ]
})

export class OurServicesModule{
    
}