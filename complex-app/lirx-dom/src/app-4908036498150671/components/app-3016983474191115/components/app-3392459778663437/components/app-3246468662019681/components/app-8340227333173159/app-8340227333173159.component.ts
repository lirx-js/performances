import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7435126368965215Component } from "./components/app-7435126368965215/app-7435126368965215.component";
import { App7708183062888397Component } from "./components/app-7708183062888397/app-7708183062888397.component";
import { App8340044692783615Component } from "./components/app-8340044692783615/app-8340044692783615.component";
import { App4464050800910567Component } from "./components/app-4464050800910567/app-4464050800910567.component";
import { App6462928830307225Component } from "./components/app-6462928830307225/app-6462928830307225.component";

// @ts-ignore
import html from './app-8340227333173159.component.html?raw';
// @ts-ignore
import style from './app-8340227333173159.component.scss?inline';

/**
 * COMPONENT: 'app-8340227333173159'
 */

export const App8340227333173159Component = new Component({
  name: 'app-8340227333173159',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7435126368965215Component,
App7708183062888397Component,
App8340044692783615Component,
App4464050800910567Component,
App6462928830307225Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
