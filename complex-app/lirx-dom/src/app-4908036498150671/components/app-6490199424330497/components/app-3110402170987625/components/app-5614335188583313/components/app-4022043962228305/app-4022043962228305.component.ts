import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6887083703983129Component } from "./components/app-6887083703983129/app-6887083703983129.component";
import { App3923275316720949Component } from "./components/app-3923275316720949/app-3923275316720949.component";
import { App3191930534096597Component } from "./components/app-3191930534096597/app-3191930534096597.component";
import { App4132104553247893Component } from "./components/app-4132104553247893/app-4132104553247893.component";
import { App1150247067589409Component } from "./components/app-1150247067589409/app-1150247067589409.component";

// @ts-ignore
import html from './app-4022043962228305.component.html?raw';
// @ts-ignore
import style from './app-4022043962228305.component.scss?inline';

/**
 * COMPONENT: 'app-4022043962228305'
 */

export const App4022043962228305Component = new Component({
  name: 'app-4022043962228305',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6887083703983129Component,
App3923275316720949Component,
App3191930534096597Component,
App4132104553247893Component,
App1150247067589409Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
