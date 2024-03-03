import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4329513193830329Component } from "./components/app-4329513193830329/app-4329513193830329.component";
import { App1695857216628169Component } from "./components/app-1695857216628169/app-1695857216628169.component";
import { App5324361285964839Component } from "./components/app-5324361285964839/app-5324361285964839.component";
import { App1104325984165593Component } from "./components/app-1104325984165593/app-1104325984165593.component";
import { App5401822318428091Component } from "./components/app-5401822318428091/app-5401822318428091.component";

// @ts-ignore
import html from './app-2842944275925349.component.html?raw';
// @ts-ignore
import style from './app-2842944275925349.component.scss?inline';

/**
 * COMPONENT: 'app-2842944275925349'
 */

export const App2842944275925349Component = new Component({
  name: 'app-2842944275925349',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4329513193830329Component,
App1695857216628169Component,
App5324361285964839Component,
App1104325984165593Component,
App5401822318428091Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
