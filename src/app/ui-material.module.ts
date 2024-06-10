/*
:: Instalacija ::
    https://material.angular.io/guide/getting-started
    ng add @angular/material

:: Button ::
    https://material.angular.io/components/button/overview

:: Icon ::
    https://material.angular.io/components/icon/overview

:: Form ::
    https://material.angular.io/components/form-field/overview

:: Input ::
    https://material.angular.io/components/input/overview

*/

import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})

export class MaterialModule {}