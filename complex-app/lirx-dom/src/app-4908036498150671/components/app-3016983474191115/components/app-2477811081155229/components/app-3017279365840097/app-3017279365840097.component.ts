import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8831191855510135Component } from "./components/app-8831191855510135/app-8831191855510135.component";
import { App8115566174829611Component } from "./components/app-8115566174829611/app-8115566174829611.component";
import { App4029743314731029Component } from "./components/app-4029743314731029/app-4029743314731029.component";
import { App171057448935799Component } from "./components/app-171057448935799/app-171057448935799.component";
import { App7743676550887347Component } from "./components/app-7743676550887347/app-7743676550887347.component";

// @ts-ignore
import html from './app-3017279365840097.component.html?raw';
// @ts-ignore
import style from './app-3017279365840097.component.scss?inline';

/**
 * COMPONENT: 'app-3017279365840097'
 */

export const App3017279365840097Component = new Component({
  name: 'app-3017279365840097',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8831191855510135Component,
App8115566174829611Component,
App4029743314731029Component,
App171057448935799Component,
App7743676550887347Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
