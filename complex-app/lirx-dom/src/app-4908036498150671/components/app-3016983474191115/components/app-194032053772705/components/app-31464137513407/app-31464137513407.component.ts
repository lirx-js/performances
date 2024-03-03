import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1853698430079393Component } from "./components/app-1853698430079393/app-1853698430079393.component";
import { App6063935540760865Component } from "./components/app-6063935540760865/app-6063935540760865.component";
import { App7764173865512491Component } from "./components/app-7764173865512491/app-7764173865512491.component";
import { App3410965095040111Component } from "./components/app-3410965095040111/app-3410965095040111.component";
import { App7664433756785643Component } from "./components/app-7664433756785643/app-7664433756785643.component";

// @ts-ignore
import html from './app-31464137513407.component.html?raw';
// @ts-ignore
import style from './app-31464137513407.component.scss?inline';

/**
 * COMPONENT: 'app-31464137513407'
 */

export const App31464137513407Component = new Component({
  name: 'app-31464137513407',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1853698430079393Component,
App6063935540760865Component,
App7764173865512491Component,
App3410965095040111Component,
App7664433756785643Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
