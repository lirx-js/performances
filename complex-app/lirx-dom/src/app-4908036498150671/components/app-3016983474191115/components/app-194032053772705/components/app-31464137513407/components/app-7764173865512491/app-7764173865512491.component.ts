import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5900605892154961Component } from "./components/app-5900605892154961/app-5900605892154961.component";
import { App4479328785270243Component } from "./components/app-4479328785270243/app-4479328785270243.component";
import { App244581065163079Component } from "./components/app-244581065163079/app-244581065163079.component";
import { App110038650134117Component } from "./components/app-110038650134117/app-110038650134117.component";
import { App5928832638169149Component } from "./components/app-5928832638169149/app-5928832638169149.component";

// @ts-ignore
import html from './app-7764173865512491.component.html?raw';
// @ts-ignore
import style from './app-7764173865512491.component.scss?inline';

/**
 * COMPONENT: 'app-7764173865512491'
 */

export const App7764173865512491Component = new Component({
  name: 'app-7764173865512491',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5900605892154961Component,
App4479328785270243Component,
App244581065163079Component,
App110038650134117Component,
App5928832638169149Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
