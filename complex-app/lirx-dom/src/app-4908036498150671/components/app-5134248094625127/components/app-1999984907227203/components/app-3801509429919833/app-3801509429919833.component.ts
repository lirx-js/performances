import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App651623055708427Component } from "./components/app-651623055708427/app-651623055708427.component";
import { App5862985591801347Component } from "./components/app-5862985591801347/app-5862985591801347.component";
import { App4094520217467387Component } from "./components/app-4094520217467387/app-4094520217467387.component";
import { App8404443894686139Component } from "./components/app-8404443894686139/app-8404443894686139.component";
import { App1619966269710841Component } from "./components/app-1619966269710841/app-1619966269710841.component";

// @ts-ignore
import html from './app-3801509429919833.component.html?raw';
// @ts-ignore
import style from './app-3801509429919833.component.scss?inline';

/**
 * COMPONENT: 'app-3801509429919833'
 */

export const App3801509429919833Component = new Component({
  name: 'app-3801509429919833',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App651623055708427Component,
App5862985591801347Component,
App4094520217467387Component,
App8404443894686139Component,
App1619966269710841Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
