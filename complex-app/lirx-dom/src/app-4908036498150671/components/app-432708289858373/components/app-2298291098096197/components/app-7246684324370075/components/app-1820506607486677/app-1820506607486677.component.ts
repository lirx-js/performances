import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3678700379281087Component } from "./components/app-3678700379281087/app-3678700379281087.component";
import { App4236398048903895Component } from "./components/app-4236398048903895/app-4236398048903895.component";
import { App8802549342785187Component } from "./components/app-8802549342785187/app-8802549342785187.component";
import { App4531146484368161Component } from "./components/app-4531146484368161/app-4531146484368161.component";
import { App5967591656871623Component } from "./components/app-5967591656871623/app-5967591656871623.component";

// @ts-ignore
import html from './app-1820506607486677.component.html?raw';
// @ts-ignore
import style from './app-1820506607486677.component.scss?inline';

/**
 * COMPONENT: 'app-1820506607486677'
 */

export const App1820506607486677Component = new Component({
  name: 'app-1820506607486677',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3678700379281087Component,
App4236398048903895Component,
App8802549342785187Component,
App4531146484368161Component,
App5967591656871623Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
