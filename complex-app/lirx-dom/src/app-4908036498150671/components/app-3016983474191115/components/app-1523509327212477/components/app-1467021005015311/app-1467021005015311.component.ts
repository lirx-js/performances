import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6077485738278839Component } from "./components/app-6077485738278839/app-6077485738278839.component";
import { App8853673126356031Component } from "./components/app-8853673126356031/app-8853673126356031.component";
import { App5833366510192003Component } from "./components/app-5833366510192003/app-5833366510192003.component";
import { App2555673692150179Component } from "./components/app-2555673692150179/app-2555673692150179.component";
import { App2601460938311063Component } from "./components/app-2601460938311063/app-2601460938311063.component";

// @ts-ignore
import html from './app-1467021005015311.component.html?raw';
// @ts-ignore
import style from './app-1467021005015311.component.scss?inline';

/**
 * COMPONENT: 'app-1467021005015311'
 */

export const App1467021005015311Component = new Component({
  name: 'app-1467021005015311',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6077485738278839Component,
App8853673126356031Component,
App5833366510192003Component,
App2555673692150179Component,
App2601460938311063Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
