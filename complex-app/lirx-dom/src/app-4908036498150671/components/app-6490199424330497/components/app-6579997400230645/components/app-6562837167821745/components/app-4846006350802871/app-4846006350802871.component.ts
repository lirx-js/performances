import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4491150985933809Component } from "./components/app-4491150985933809/app-4491150985933809.component";
import { App2944415524736061Component } from "./components/app-2944415524736061/app-2944415524736061.component";
import { App1873246870694011Component } from "./components/app-1873246870694011/app-1873246870694011.component";
import { App8733422598666943Component } from "./components/app-8733422598666943/app-8733422598666943.component";
import { App1320535915198871Component } from "./components/app-1320535915198871/app-1320535915198871.component";

// @ts-ignore
import html from './app-4846006350802871.component.html?raw';
// @ts-ignore
import style from './app-4846006350802871.component.scss?inline';

/**
 * COMPONENT: 'app-4846006350802871'
 */

export const App4846006350802871Component = new Component({
  name: 'app-4846006350802871',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4491150985933809Component,
App2944415524736061Component,
App1873246870694011Component,
App8733422598666943Component,
App1320535915198871Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
