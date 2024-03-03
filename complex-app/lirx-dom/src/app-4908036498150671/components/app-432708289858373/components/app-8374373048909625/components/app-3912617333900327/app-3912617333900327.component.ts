import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3981093570431335Component } from "./components/app-3981093570431335/app-3981093570431335.component";
import { App5277679738889427Component } from "./components/app-5277679738889427/app-5277679738889427.component";
import { App4770058810209423Component } from "./components/app-4770058810209423/app-4770058810209423.component";
import { App2471276191456547Component } from "./components/app-2471276191456547/app-2471276191456547.component";
import { App6686553174960777Component } from "./components/app-6686553174960777/app-6686553174960777.component";

// @ts-ignore
import html from './app-3912617333900327.component.html?raw';
// @ts-ignore
import style from './app-3912617333900327.component.scss?inline';

/**
 * COMPONENT: 'app-3912617333900327'
 */

export const App3912617333900327Component = new Component({
  name: 'app-3912617333900327',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3981093570431335Component,
App5277679738889427Component,
App4770058810209423Component,
App2471276191456547Component,
App6686553174960777Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
