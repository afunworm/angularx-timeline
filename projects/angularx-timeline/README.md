# angularx-timeline

Create a simple timeline layout with dynamic input.

## Online Demo

[https://angularx-timeline.byh.uy/](https://angularx-timeline.byh.uy/)

## Prerequisites:

1. This library requires `moment`.
2. If you do not have one, make sure to  install them in your project folder by running `npm install --save moment`.
3. If you have `@angular/material` installed, you can theme the component with your theme colors. Otherwise, built-in colors are available, although it is highly recommended to have `@angular/material` for elegant presentation without the need of extra CSS.

## Getting Started

1. Run `npm install --save angularx-timeline`.
2. Import `AngularXTimelineModule` into your `app.module`:

```typescript
...
import { AngularXTimelineModule } from 'angularx-timeline';

@NgModule({
  ...
  imports: [
    ...
    AngularXTimelineModule
  ]
})
export class AppModule { }
```

3. Optional - Theme your component:

```scss
/* You can add global styles to this file, and also import other style files */
@import '~@angular/material/theming';
@include mat-core();

//AngularX Timeline CSS
@import 'angularx-timeline/theming';

...

//Theme build
@include angular-material-theme($theme);
@include angularx-timeline-theme($theme);
```
## Usage

```typescript
import { Component, OnInit } from '@angular/core';
import { AngularXTimelineDataSource } from 'angularx-timeline';

@Component({
    selector: 'app-root',
    template: `<angularx-timeline [dataSource]="dataSource"></angularx-timeline>`
})
export class AppComponent {
    title = 'AngularXTimeline Demo';
    dataSource: AngularXTimelineDataSource = [];

    ngOnInit() {
        let data = [
            { title: 'Event Period #1' },
            { date: new Date(2020, 0, 1), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { date: new Date(2020, 1, 1), title: 'Lorem ipsum', content: '<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { date: new Date(2020, 2, 1), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Event Period #2' },
            { date: new Date(2020, 0, 1), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { date: 'Unconfirmed Date', title: 'Lorem ipsum', content: '<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { date: new Date(2020, 2, 1), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        ];
        data.forEach(entry => this.dataSource.push(entry));
    }
}

```

## Directives

**Properties**

| Name                    | Type/Interface                            | Default           | Description                                                                                                      |
| ----------------------- | ------------------------------------------| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| `@Input('dataSource')`  | AngularXTimelineDataSource                | []                | Data source to generate the timeline                                                                             |
| `@Input('type')`        | 'default' &#124; 'simple' &#124; 'center' | 'default'         | Timeline style                                                                                                   |
| `@Input('color')`       | 'primary' &#124; 'accent' &#124; 'warn'   | 'primary'         | Timeline color                                                                                                   |
| `@Input('format')`      | string                                    | ''MMMM Do, YYYY'' | Date format to parse a Date Object from [moment's documentation](https://momentjs.com/docs/#/displaying/format/) |

**Interfaces**

```typescript
interface AngularXTimelineData {

    /** The date of the event entry */
    date?: string | Date,

    /** The title of the event entry
     * If only the title is supplied, it will be come the 'Heading' for the entry
    */
    title: string | null,

    /** The content of the event entry. HTML is accepted. */
    content?: string | null,
}

type AngularXTimelineDataSource = AngularXTimelineData[];
```

## Contribution

For feature request and bug report, visit [the issue page](https://github.com/afunworm/angularx-timeline/issues).

## License

MIT License - Refer to LICENSE.