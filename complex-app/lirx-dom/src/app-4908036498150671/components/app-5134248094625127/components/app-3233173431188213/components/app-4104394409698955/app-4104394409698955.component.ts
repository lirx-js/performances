import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8580752307621861Component } from "./components/app-8580752307621861/app-8580752307621861.component";
import { App1234143962391259Component } from "./components/app-1234143962391259/app-1234143962391259.component";
import { App588649663010157Component } from "./components/app-588649663010157/app-588649663010157.component";
import { App3319385375970411Component } from "./components/app-3319385375970411/app-3319385375970411.component";
import { App3394631592592035Component } from "./components/app-3394631592592035/app-3394631592592035.component";

// @ts-ignore
import html from './app-4104394409698955.component.html?raw';
// @ts-ignore
import style from './app-4104394409698955.component.scss?inline';

/**
 * COMPONENT: 'app-4104394409698955'
 */

export const App4104394409698955Component = new Component({
  name: 'app-4104394409698955',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8580752307621861Component,
App1234143962391259Component,
App588649663010157Component,
App3319385375970411Component,
App3394631592592035Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
