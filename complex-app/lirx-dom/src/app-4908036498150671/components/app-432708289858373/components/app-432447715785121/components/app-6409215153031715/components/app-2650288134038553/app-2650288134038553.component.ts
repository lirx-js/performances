import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5914612396311037Component } from "./components/app-5914612396311037/app-5914612396311037.component";
import { App5019408480606915Component } from "./components/app-5019408480606915/app-5019408480606915.component";
import { App3426290060539981Component } from "./components/app-3426290060539981/app-3426290060539981.component";
import { App4987821094007897Component } from "./components/app-4987821094007897/app-4987821094007897.component";
import { App1231493622441703Component } from "./components/app-1231493622441703/app-1231493622441703.component";

// @ts-ignore
import html from './app-2650288134038553.component.html?raw';
// @ts-ignore
import style from './app-2650288134038553.component.scss?inline';

/**
 * COMPONENT: 'app-2650288134038553'
 */

export const App2650288134038553Component = new Component({
  name: 'app-2650288134038553',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5914612396311037Component,
App5019408480606915Component,
App3426290060539981Component,
App4987821094007897Component,
App1231493622441703Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
