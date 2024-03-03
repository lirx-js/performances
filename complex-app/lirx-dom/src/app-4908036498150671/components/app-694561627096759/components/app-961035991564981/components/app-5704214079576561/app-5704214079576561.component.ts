import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4559494876344903Component } from "./components/app-4559494876344903/app-4559494876344903.component";
import { App1620924683002971Component } from "./components/app-1620924683002971/app-1620924683002971.component";
import { App3975116857604001Component } from "./components/app-3975116857604001/app-3975116857604001.component";
import { App6704039704554263Component } from "./components/app-6704039704554263/app-6704039704554263.component";
import { App3994163803723053Component } from "./components/app-3994163803723053/app-3994163803723053.component";

// @ts-ignore
import html from './app-5704214079576561.component.html?raw';
// @ts-ignore
import style from './app-5704214079576561.component.scss?inline';

/**
 * COMPONENT: 'app-5704214079576561'
 */

export const App5704214079576561Component = new Component({
  name: 'app-5704214079576561',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4559494876344903Component,
App1620924683002971Component,
App3975116857604001Component,
App6704039704554263Component,
App3994163803723053Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
