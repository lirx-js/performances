import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App618785043230333Component } from "./components/app-618785043230333/app-618785043230333.component";
import { App4309007929872551Component } from "./components/app-4309007929872551/app-4309007929872551.component";
import { App7885770995250477Component } from "./components/app-7885770995250477/app-7885770995250477.component";
import { App7835810564635277Component } from "./components/app-7835810564635277/app-7835810564635277.component";
import { App113828703136165Component } from "./components/app-113828703136165/app-113828703136165.component";

// @ts-ignore
import html from './app-1691629848296899.component.html?raw';
// @ts-ignore
import style from './app-1691629848296899.component.scss?inline';

/**
 * COMPONENT: 'app-1691629848296899'
 */

export const App1691629848296899Component = new Component({
  name: 'app-1691629848296899',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App618785043230333Component,
App4309007929872551Component,
App7885770995250477Component,
App7835810564635277Component,
App113828703136165Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
