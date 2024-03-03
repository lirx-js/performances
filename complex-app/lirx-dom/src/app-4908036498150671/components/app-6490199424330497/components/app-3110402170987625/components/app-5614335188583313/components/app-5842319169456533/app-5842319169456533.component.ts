import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1535509940560863Component } from "./components/app-1535509940560863/app-1535509940560863.component";
import { App7371399069589707Component } from "./components/app-7371399069589707/app-7371399069589707.component";
import { App7976451230164833Component } from "./components/app-7976451230164833/app-7976451230164833.component";
import { App6570737900812173Component } from "./components/app-6570737900812173/app-6570737900812173.component";
import { App2450684841869505Component } from "./components/app-2450684841869505/app-2450684841869505.component";

// @ts-ignore
import html from './app-5842319169456533.component.html?raw';
// @ts-ignore
import style from './app-5842319169456533.component.scss?inline';

/**
 * COMPONENT: 'app-5842319169456533'
 */

export const App5842319169456533Component = new Component({
  name: 'app-5842319169456533',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1535509940560863Component,
App7371399069589707Component,
App7976451230164833Component,
App6570737900812173Component,
App2450684841869505Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
