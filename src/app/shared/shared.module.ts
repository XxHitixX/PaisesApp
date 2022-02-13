import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SidebarComponent
    ],
    providers: [

    ]
})
export class SharedModule{}