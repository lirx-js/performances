import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3233173431188213Component } from "./components/app-3233173431188213/app-3233173431188213.component";
import { App1999984907227203Component } from "./components/app-1999984907227203/app-1999984907227203.component";
import { App1641154883444775Component } from "./components/app-1641154883444775/app-1641154883444775.component";
import { App4071763278393113Component } from "./components/app-4071763278393113/app-4071763278393113.component";
import { App6035008839265343Component } from "./components/app-6035008839265343/app-6035008839265343.component";

// @ts-ignore
import html from './app-5134248094625127.component.html?raw';
// @ts-ignore
import style from './app-5134248094625127.component.scss?inline';

/**
 * COMPONENT: 'app-5134248094625127'
 */

export const App5134248094625127Component = new Component({
  name: 'app-5134248094625127',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3233173431188213Component,
App1999984907227203Component,
App1641154883444775Component,
App4071763278393113Component,
App6035008839265343Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
