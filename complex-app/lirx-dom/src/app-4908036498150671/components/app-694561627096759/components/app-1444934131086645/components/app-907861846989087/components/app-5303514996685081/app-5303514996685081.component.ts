import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3724776995235861Component } from "./components/app-3724776995235861/app-3724776995235861.component";
import { App3990626509171263Component } from "./components/app-3990626509171263/app-3990626509171263.component";
import { App1164574181811767Component } from "./components/app-1164574181811767/app-1164574181811767.component";
import { App4703216645677755Component } from "./components/app-4703216645677755/app-4703216645677755.component";
import { App3513476284394889Component } from "./components/app-3513476284394889/app-3513476284394889.component";

// @ts-ignore
import html from './app-5303514996685081.component.html?raw';
// @ts-ignore
import style from './app-5303514996685081.component.scss?inline';

/**
 * COMPONENT: 'app-5303514996685081'
 */

export const App5303514996685081Component = new Component({
  name: 'app-5303514996685081',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3724776995235861Component,
App3990626509171263Component,
App1164574181811767Component,
App4703216645677755Component,
App3513476284394889Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
