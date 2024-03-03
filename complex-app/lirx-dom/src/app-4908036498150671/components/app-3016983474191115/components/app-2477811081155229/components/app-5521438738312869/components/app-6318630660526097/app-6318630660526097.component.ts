import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2663184015211963Component } from "./components/app-2663184015211963/app-2663184015211963.component";
import { App828800844317545Component } from "./components/app-828800844317545/app-828800844317545.component";
import { App8815057075809423Component } from "./components/app-8815057075809423/app-8815057075809423.component";
import { App2983674831352533Component } from "./components/app-2983674831352533/app-2983674831352533.component";
import { App7950174851458659Component } from "./components/app-7950174851458659/app-7950174851458659.component";

// @ts-ignore
import html from './app-6318630660526097.component.html?raw';
// @ts-ignore
import style from './app-6318630660526097.component.scss?inline';

/**
 * COMPONENT: 'app-6318630660526097'
 */

export const App6318630660526097Component = new Component({
  name: 'app-6318630660526097',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2663184015211963Component,
App828800844317545Component,
App8815057075809423Component,
App2983674831352533Component,
App7950174851458659Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
