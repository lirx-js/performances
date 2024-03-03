import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1661468535481163Component } from "./components/app-1661468535481163/app-1661468535481163.component";
import { App3018911055774365Component } from "./components/app-3018911055774365/app-3018911055774365.component";
import { App8595243770300555Component } from "./components/app-8595243770300555/app-8595243770300555.component";
import { App60309528924585Component } from "./components/app-60309528924585/app-60309528924585.component";
import { App3969546772518249Component } from "./components/app-3969546772518249/app-3969546772518249.component";

// @ts-ignore
import html from './app-4457366983356637.component.html?raw';
// @ts-ignore
import style from './app-4457366983356637.component.scss?inline';

/**
 * COMPONENT: 'app-4457366983356637'
 */

export const App4457366983356637Component = new Component({
  name: 'app-4457366983356637',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1661468535481163Component,
App3018911055774365Component,
App8595243770300555Component,
App60309528924585Component,
App3969546772518249Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
