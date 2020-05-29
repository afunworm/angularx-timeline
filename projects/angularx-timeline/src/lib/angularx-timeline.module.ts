import { NgModule } from '@angular/core';
import { AngularXTimelineComponent } from './angularx-timeline.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AngularXTimelineComponent],
    imports: [
        CommonModule
    ],
    exports: [AngularXTimelineComponent]
})
export class AngularXTimelineModule { }