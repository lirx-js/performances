import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7415523436427467Component } from "./components/app-7415523436427467/app-7415523436427467.component";
import { App4693894808141777Component } from "./components/app-4693894808141777/app-4693894808141777.component";
import { App8510313038268037Component } from "./components/app-8510313038268037/app-8510313038268037.component";
import { App5368627432225057Component } from "./components/app-5368627432225057/app-5368627432225057.component";
import { App3289359977680919Component } from "./components/app-3289359977680919/app-3289359977680919.component";

// @ts-ignore
import html from './app-3560248789843357.component.html?raw';
// @ts-ignore
import style from './app-3560248789843357.component.scss?inline';

/**
 * COMPONENT: 'app-3560248789843357'
 */

export const App3560248789843357Component = new Component({
  name: 'app-3560248789843357',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7415523436427467Component,
App4693894808141777Component,
App8510313038268037Component,
App5368627432225057Component,
App3289359977680919Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
