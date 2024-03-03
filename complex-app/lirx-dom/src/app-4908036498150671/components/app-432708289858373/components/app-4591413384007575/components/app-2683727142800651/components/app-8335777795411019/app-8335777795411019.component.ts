import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7364394594311853Component } from "./components/app-7364394594311853/app-7364394594311853.component";
import { App2801589391816817Component } from "./components/app-2801589391816817/app-2801589391816817.component";
import { App1416445546963659Component } from "./components/app-1416445546963659/app-1416445546963659.component";
import { App5680109040464509Component } from "./components/app-5680109040464509/app-5680109040464509.component";
import { App3486079907349599Component } from "./components/app-3486079907349599/app-3486079907349599.component";

// @ts-ignore
import html from './app-8335777795411019.component.html?raw';
// @ts-ignore
import style from './app-8335777795411019.component.scss?inline';

/**
 * COMPONENT: 'app-8335777795411019'
 */

export const App8335777795411019Component = new Component({
  name: 'app-8335777795411019',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7364394594311853Component,
App2801589391816817Component,
App1416445546963659Component,
App5680109040464509Component,
App3486079907349599Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
