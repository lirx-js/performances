import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App31464137513407Component } from "./components/app-31464137513407/app-31464137513407.component";
import { App4575579030372919Component } from "./components/app-4575579030372919/app-4575579030372919.component";
import { App7318613002614165Component } from "./components/app-7318613002614165/app-7318613002614165.component";
import { App3488475058651661Component } from "./components/app-3488475058651661/app-3488475058651661.component";
import { App5899098449277531Component } from "./components/app-5899098449277531/app-5899098449277531.component";

// @ts-ignore
import html from './app-194032053772705.component.html?raw';
// @ts-ignore
import style from './app-194032053772705.component.scss?inline';

/**
 * COMPONENT: 'app-194032053772705'
 */

export const App194032053772705Component = new Component({
  name: 'app-194032053772705',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App31464137513407Component,
App4575579030372919Component,
App7318613002614165Component,
App3488475058651661Component,
App5899098449277531Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
