import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7636455644361729Component } from "./components/app-7636455644361729/app-7636455644361729.component";
import { App4333632988616813Component } from "./components/app-4333632988616813/app-4333632988616813.component";
import { App5133641987225585Component } from "./components/app-5133641987225585/app-5133641987225585.component";
import { App7398449909921553Component } from "./components/app-7398449909921553/app-7398449909921553.component";
import { App1513638946492245Component } from "./components/app-1513638946492245/app-1513638946492245.component";

// @ts-ignore
import html from './app-5500817515360091.component.html?raw';
// @ts-ignore
import style from './app-5500817515360091.component.scss?inline';

/**
 * COMPONENT: 'app-5500817515360091'
 */

export const App5500817515360091Component = new Component({
  name: 'app-5500817515360091',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7636455644361729Component,
App4333632988616813Component,
App5133641987225585Component,
App7398449909921553Component,
App1513638946492245Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
