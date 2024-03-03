import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3076510359436571Component } from "./components/app-3076510359436571/app-3076510359436571.component";
import { App4815154076026371Component } from "./components/app-4815154076026371/app-4815154076026371.component";
import { App3153940002796831Component } from "./components/app-3153940002796831/app-3153940002796831.component";
import { App8426328810401837Component } from "./components/app-8426328810401837/app-8426328810401837.component";
import { App8086258756836255Component } from "./components/app-8086258756836255/app-8086258756836255.component";

// @ts-ignore
import html from './app-3918152862726161.component.html?raw';
// @ts-ignore
import style from './app-3918152862726161.component.scss?inline';

/**
 * COMPONENT: 'app-3918152862726161'
 */

export const App3918152862726161Component = new Component({
  name: 'app-3918152862726161',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3076510359436571Component,
App4815154076026371Component,
App3153940002796831Component,
App8426328810401837Component,
App8086258756836255Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
