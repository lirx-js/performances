import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1491939892466143Component } from "./components/app-1491939892466143/app-1491939892466143.component";
import { App3905092954679063Component } from "./components/app-3905092954679063/app-3905092954679063.component";
import { App5914307323791191Component } from "./components/app-5914307323791191/app-5914307323791191.component";
import { App5183190514626197Component } from "./components/app-5183190514626197/app-5183190514626197.component";
import { App2564576997200771Component } from "./components/app-2564576997200771/app-2564576997200771.component";

// @ts-ignore
import html from './app-4401580856053225.component.html?raw';
// @ts-ignore
import style from './app-4401580856053225.component.scss?inline';

/**
 * COMPONENT: 'app-4401580856053225'
 */

export const App4401580856053225Component = new Component({
  name: 'app-4401580856053225',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1491939892466143Component,
App3905092954679063Component,
App5914307323791191Component,
App5183190514626197Component,
App2564576997200771Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
