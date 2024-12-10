import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ArrayFilter } from "./pipes/arrayFilter.pipe";
import { OurClientsComponent } from "./components/our-clients/clients.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports:[
        CommonModule,
        RouterModule
    ],
    declarations:[
        FooterComponent,
        HeaderComponent,
        OurClientsComponent,
        ArrayFilter
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        OurClientsComponent,
    ]
})

export class SharedModule {

}