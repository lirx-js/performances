import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5715796794679287Component } from "./components/app-5715796794679287/app-5715796794679287.component";
import { App3028918046204385Component } from "./components/app-3028918046204385/app-3028918046204385.component";
import { App6106246649889933Component } from "./components/app-6106246649889933/app-6106246649889933.component";
import { App3726833931366011Component } from "./components/app-3726833931366011/app-3726833931366011.component";
import { App7135922867671911Component } from "./components/app-7135922867671911/app-7135922867671911.component";

// @ts-ignore
import html from './app-1853698430079393.component.html?raw';
// @ts-ignore
import style from './app-1853698430079393.component.scss?inline';

/**
 * COMPONENT: 'app-1853698430079393'
 */

export const App1853698430079393Component = new Component({
  name: 'app-1853698430079393',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5715796794679287Component,
App3028918046204385Component,
App6106246649889933Component,
App3726833931366011Component,
App7135922867671911Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
