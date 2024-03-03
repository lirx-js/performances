import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8919012321788965Component } from "./components/app-8919012321788965/app-8919012321788965.component";
import { App1000866350223727Component } from "./components/app-1000866350223727/app-1000866350223727.component";
import { App5368864248885863Component } from "./components/app-5368864248885863/app-5368864248885863.component";
import { App1996957644560831Component } from "./components/app-1996957644560831/app-1996957644560831.component";
import { App5363011007991669Component } from "./components/app-5363011007991669/app-5363011007991669.component";

// @ts-ignore
import html from './app-4929576965133879.component.html?raw';
// @ts-ignore
import style from './app-4929576965133879.component.scss?inline';

/**
 * COMPONENT: 'app-4929576965133879'
 */

export const App4929576965133879Component = new Component({
  name: 'app-4929576965133879',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8919012321788965Component,
App1000866350223727Component,
App5368864248885863Component,
App1996957644560831Component,
App5363011007991669Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
