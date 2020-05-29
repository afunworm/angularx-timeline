import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;

export interface AngularXTimelineData {

    /** The date of the event entry */
    date?: string | Date,

    /** The title of the event entry
     * If only the title is supplied, it will be come the 'Heading' for the entry
    */
    title: string | null,

    /** The content of the event entry. HTML is accepted. */
    content?: string | null,
}

export type AngularXTimelineDataSource = AngularXTimelineData[];

@Component({
    selector: 'angularx-timeline',
    templateUrl: './angularx-timeline.component.html',
    styleUrls: ['../theming.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AngularXTimelineComponent implements OnInit {

    constructor() { }

    @Input('dataSource') data: AngularXTimelineDataSource = [];
    @Input('type') type: 'default' | 'simple' | 'centered' = 'default';
    @Input('color') color: 'primary' | 'accent' | 'warn' = 'primary';
    @Input('format') format: string = 'MMMM Do, YYYY'; //https://momentjs.com/docs/#/displaying/format/
    timelineClass: 'timeline' | 'timeline timeline-split' | 'timeline timeline-centered' = 'timeline timeline-split';

    ngOnInit(): void {
        //Timeline class
        if (this.type === 'simple') this.timelineClass = 'timeline';
        else if (this.type === 'centered') this.timelineClass = 'timeline timeline-centered';
        else this.timelineClass = 'timeline timeline-split';

        //Timeline color
        if (!['primary', 'accent', 'warn'].includes(this.color)) this.color = 'primary';
    }

    isTitleOnly(entry: AngularXTimelineData): boolean {
        return !entry.content && !entry.date;
    }

    formatTimelineDate(date: Date | string): string {
        if (date instanceof Date) return moment(date).format(this.format);

        return date.toString();
    }

}