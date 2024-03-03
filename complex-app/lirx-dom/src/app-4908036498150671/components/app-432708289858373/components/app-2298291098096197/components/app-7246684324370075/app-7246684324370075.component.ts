import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1655148336246027Component } from "./components/app-1655148336246027/app-1655148336246027.component";
import { App3409724515255077Component } from "./components/app-3409724515255077/app-3409724515255077.component";
import { App8633629989605621Component } from "./components/app-8633629989605621/app-8633629989605621.component";
import { App8410688260803797Component } from "./components/app-8410688260803797/app-8410688260803797.component";
import { App1820506607486677Component } from "./components/app-1820506607486677/app-1820506607486677.component";

// @ts-ignore
import html from './app-7246684324370075.component.html?raw';
// @ts-ignore
import style from './app-7246684324370075.component.scss?inline';

/**
 * COMPONENT: 'app-7246684324370075'
 */

export const App7246684324370075Component = new Component({
  name: 'app-7246684324370075',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1655148336246027Component,
App3409724515255077Component,
App8633629989605621Component,
App8410688260803797Component,
App1820506607486677Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
