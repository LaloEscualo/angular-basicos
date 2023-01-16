import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ // en las DECLARATIONS van COMPONENTS
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // en EXPORTS va ...NO SURE (lo que necesita ver el resto de la app???)
        ListadoComponent
    ],
    imports: [ // en los IMPORTS van MODULE
        CommonModule // necesario cuando usas *ngIf, ngFor y otras directivas de Angular
    ]

})

export class HeroesModule {

}