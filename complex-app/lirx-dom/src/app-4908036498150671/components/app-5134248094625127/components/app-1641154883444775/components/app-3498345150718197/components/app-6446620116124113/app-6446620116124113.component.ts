import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3559153358418699Component } from "./components/app-3559153358418699/app-3559153358418699.component";
import { App4698561445290731Component } from "./components/app-4698561445290731/app-4698561445290731.component";
import { App3352828369859461Component } from "./components/app-3352828369859461/app-3352828369859461.component";
import { App1751952505615195Component } from "./components/app-1751952505615195/app-1751952505615195.component";
import { App4513427514058637Component } from "./components/app-4513427514058637/app-4513427514058637.component";

// @ts-ignore
import html from './app-6446620116124113.component.html?raw';
// @ts-ignore
import style from './app-6446620116124113.component.scss?inline';

/**
 * COMPONENT: 'app-6446620116124113'
 */

export const App6446620116124113Component = new Component({
  name: 'app-6446620116124113',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3559153358418699Component,
App4698561445290731Component,
App3352828369859461Component,
App1751952505615195Component,
App4513427514058637Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
