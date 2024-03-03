import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2602114396712743Component } from "./components/app-2602114396712743/app-2602114396712743.component";
import { App4005264109677461Component } from "./components/app-4005264109677461/app-4005264109677461.component";
import { App6937776624960891Component } from "./components/app-6937776624960891/app-6937776624960891.component";
import { App6518379580947993Component } from "./components/app-6518379580947993/app-6518379580947993.component";
import { App1748979728912215Component } from "./components/app-1748979728912215/app-1748979728912215.component";

// @ts-ignore
import html from './app-7664433756785643.component.html?raw';
// @ts-ignore
import style from './app-7664433756785643.component.scss?inline';

/**
 * COMPONENT: 'app-7664433756785643'
 */

export const App7664433756785643Component = new Component({
  name: 'app-7664433756785643',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2602114396712743Component,
App4005264109677461Component,
App6937776624960891Component,
App6518379580947993Component,
App1748979728912215Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
