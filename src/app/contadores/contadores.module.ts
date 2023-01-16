// import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';





@NgModule({
    declarations: [ // en las DECLARATIONS van COMPONENTS
        ContadorComponent,

    ],
    exports: [ // en EXPORTS va ...NO SURE (lo que necesita ver el resto de la app???)
        ContadorComponent
    ],
    imports: [ // en los IMPORTS van MODULE
        // CommonModule // necesario cuando usas *ngIf, ngFor y otras directivas de Angular
    ]

})

export class ContadoresModule {

}