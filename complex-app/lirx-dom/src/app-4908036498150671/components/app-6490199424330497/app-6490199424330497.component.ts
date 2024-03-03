import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4395974978091103Component } from "./components/app-4395974978091103/app-4395974978091103.component";
import { App2584579129404253Component } from "./components/app-2584579129404253/app-2584579129404253.component";
import { App6579997400230645Component } from "./components/app-6579997400230645/app-6579997400230645.component";
import { App5931850671280591Component } from "./components/app-5931850671280591/app-5931850671280591.component";
import { App3110402170987625Component } from "./components/app-3110402170987625/app-3110402170987625.component";

// @ts-ignore
import html from './app-6490199424330497.component.html?raw';
// @ts-ignore
import style from './app-6490199424330497.component.scss?inline';

/**
 * COMPONENT: 'app-6490199424330497'
 */

export const App6490199424330497Component = new Component({
  name: 'app-6490199424330497',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4395974978091103Component,
App2584579129404253Component,
App6579997400230645Component,
App5931850671280591Component,
App3110402170987625Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
