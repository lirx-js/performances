import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8312767044138081Component } from "./components/app-8312767044138081/app-8312767044138081.component";
import { App7797990732429665Component } from "./components/app-7797990732429665/app-7797990732429665.component";
import { App1792817513670841Component } from "./components/app-1792817513670841/app-1792817513670841.component";
import { App5349714133778011Component } from "./components/app-5349714133778011/app-5349714133778011.component";
import { App6603362549652417Component } from "./components/app-6603362549652417/app-6603362549652417.component";

// @ts-ignore
import html from './app-2584579129404253.component.html?raw';
// @ts-ignore
import style from './app-2584579129404253.component.scss?inline';

/**
 * COMPONENT: 'app-2584579129404253'
 */

export const App2584579129404253Component = new Component({
  name: 'app-2584579129404253',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8312767044138081Component,
App7797990732429665Component,
App1792817513670841Component,
App5349714133778011Component,
App6603362549652417Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
