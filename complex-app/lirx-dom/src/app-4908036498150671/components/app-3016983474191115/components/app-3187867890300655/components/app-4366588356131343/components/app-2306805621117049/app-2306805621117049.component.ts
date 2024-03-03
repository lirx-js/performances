import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4788025008558655Component } from "./components/app-4788025008558655/app-4788025008558655.component";
import { App752172106611621Component } from "./components/app-752172106611621/app-752172106611621.component";
import { App2814664750835529Component } from "./components/app-2814664750835529/app-2814664750835529.component";
import { App1387209466622957Component } from "./components/app-1387209466622957/app-1387209466622957.component";
import { App261708932747119Component } from "./components/app-261708932747119/app-261708932747119.component";

// @ts-ignore
import html from './app-2306805621117049.component.html?raw';
// @ts-ignore
import style from './app-2306805621117049.component.scss?inline';

/**
 * COMPONENT: 'app-2306805621117049'
 */

export const App2306805621117049Component = new Component({
  name: 'app-2306805621117049',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4788025008558655Component,
App752172106611621Component,
App2814664750835529Component,
App1387209466622957Component,
App261708932747119Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
