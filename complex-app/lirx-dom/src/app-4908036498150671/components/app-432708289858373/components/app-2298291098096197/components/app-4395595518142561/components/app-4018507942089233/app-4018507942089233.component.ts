import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1871540140292607Component } from "./components/app-1871540140292607/app-1871540140292607.component";
import { App3514945555168941Component } from "./components/app-3514945555168941/app-3514945555168941.component";
import { App8156766407815515Component } from "./components/app-8156766407815515/app-8156766407815515.component";
import { App1089671433207053Component } from "./components/app-1089671433207053/app-1089671433207053.component";
import { App5001282683294473Component } from "./components/app-5001282683294473/app-5001282683294473.component";

// @ts-ignore
import html from './app-4018507942089233.component.html?raw';
// @ts-ignore
import style from './app-4018507942089233.component.scss?inline';

/**
 * COMPONENT: 'app-4018507942089233'
 */

export const App4018507942089233Component = new Component({
  name: 'app-4018507942089233',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1871540140292607Component,
App3514945555168941Component,
App8156766407815515Component,
App1089671433207053Component,
App5001282683294473Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
