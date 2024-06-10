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

:: Datepicker ::
    https://material.angular.io/components/datepicker/overview

:: Checkbox :: 
    https://material.angular.io/components/checkbox/overview

:: Sidenav ::
    https://material.angular.io/components/sidenav/overview

:: Toolbar ::
    https://material.angular.io/components/toolbar/overview

*/

import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatCheckboxModule, 
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatCheckboxModule, 
        MatSidenavModule,
        MatToolbarModule
    ]
})

export class MaterialModule {}