import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4609981455892305Component } from "./components/app-4609981455892305/app-4609981455892305.component";
import { App4788295075572085Component } from "./components/app-4788295075572085/app-4788295075572085.component";
import { App7294238675134657Component } from "./components/app-7294238675134657/app-7294238675134657.component";
import { App8284894014945787Component } from "./components/app-8284894014945787/app-8284894014945787.component";
import { App3336330972359709Component } from "./components/app-3336330972359709/app-3336330972359709.component";

// @ts-ignore
import html from './app-3488475058651661.component.html?raw';
// @ts-ignore
import style from './app-3488475058651661.component.scss?inline';

/**
 * COMPONENT: 'app-3488475058651661'
 */

export const App3488475058651661Component = new Component({
  name: 'app-3488475058651661',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4609981455892305Component,
App4788295075572085Component,
App7294238675134657Component,
App8284894014945787Component,
App3336330972359709Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
