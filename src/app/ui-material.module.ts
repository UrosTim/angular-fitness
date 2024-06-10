/*
:: Instalacija ::

    https://material.angular.io/guide/getting-started
    ng add @angular/material

:: Button ::

    https://material.angular.io/components/button/overview

:: Icon ::

    https://material.angular.io/components/icon/overview

*/

import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [MatButtonModule, MatIconModule],
    exports: [MatButtonModule, MatIconModule]
})

export class MaterialModule {}