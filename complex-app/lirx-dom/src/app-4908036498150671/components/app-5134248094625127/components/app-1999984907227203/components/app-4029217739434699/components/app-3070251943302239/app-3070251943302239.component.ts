import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7506883274169135Component } from "./components/app-7506883274169135/app-7506883274169135.component";
import { App644980139038609Component } from "./components/app-644980139038609/app-644980139038609.component";
import { App2416754277157Component } from "./components/app-2416754277157/app-2416754277157.component";
import { App3626382040303831Component } from "./components/app-3626382040303831/app-3626382040303831.component";
import { App1658525546243865Component } from "./components/app-1658525546243865/app-1658525546243865.component";

// @ts-ignore
import html from './app-3070251943302239.component.html?raw';
// @ts-ignore
import style from './app-3070251943302239.component.scss?inline';

/**
 * COMPONENT: 'app-3070251943302239'
 */

export const App3070251943302239Component = new Component({
  name: 'app-3070251943302239',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7506883274169135Component,
App644980139038609Component,
App2416754277157Component,
App3626382040303831Component,
App1658525546243865Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
