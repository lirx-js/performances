import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App106689842655053Component } from "./components/app-106689842655053/app-106689842655053.component";
import { App7618756434309619Component } from "./components/app-7618756434309619/app-7618756434309619.component";
import { App7073518082769483Component } from "./components/app-7073518082769483/app-7073518082769483.component";
import { App529782196625749Component } from "./components/app-529782196625749/app-529782196625749.component";
import { App4548103303718883Component } from "./components/app-4548103303718883/app-4548103303718883.component";

// @ts-ignore
import html from './app-3193710242441.component.html?raw';
// @ts-ignore
import style from './app-3193710242441.component.scss?inline';

/**
 * COMPONENT: 'app-3193710242441'
 */

export const App3193710242441Component = new Component({
  name: 'app-3193710242441',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App106689842655053Component,
App7618756434309619Component,
App7073518082769483Component,
App529782196625749Component,
App4548103303718883Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
