import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5277415421506029Component } from "./components/app-5277415421506029/app-5277415421506029.component";
import { App7500149392539031Component } from "./components/app-7500149392539031/app-7500149392539031.component";
import { App4836054564180547Component } from "./components/app-4836054564180547/app-4836054564180547.component";
import { App3812347391024965Component } from "./components/app-3812347391024965/app-3812347391024965.component";
import { App4434571563649297Component } from "./components/app-4434571563649297/app-4434571563649297.component";

// @ts-ignore
import html from './app-1755250368685647.component.html?raw';
// @ts-ignore
import style from './app-1755250368685647.component.scss?inline';

/**
 * COMPONENT: 'app-1755250368685647'
 */

export const App1755250368685647Component = new Component({
  name: 'app-1755250368685647',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5277415421506029Component,
App7500149392539031Component,
App4836054564180547Component,
App3812347391024965Component,
App4434571563649297Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
