import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4956732068426419Component } from "./components/app-4956732068426419/app-4956732068426419.component";
import { App6001100361229445Component } from "./components/app-6001100361229445/app-6001100361229445.component";
import { App2755435632251215Component } from "./components/app-2755435632251215/app-2755435632251215.component";
import { App189968424008643Component } from "./components/app-189968424008643/app-189968424008643.component";
import { App1935788452131739Component } from "./components/app-1935788452131739/app-1935788452131739.component";

// @ts-ignore
import html from './app-959444908259209.component.html?raw';
// @ts-ignore
import style from './app-959444908259209.component.scss?inline';

/**
 * COMPONENT: 'app-959444908259209'
 */

export const App959444908259209Component = new Component({
  name: 'app-959444908259209',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4956732068426419Component,
App6001100361229445Component,
App2755435632251215Component,
App189968424008643Component,
App1935788452131739Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
