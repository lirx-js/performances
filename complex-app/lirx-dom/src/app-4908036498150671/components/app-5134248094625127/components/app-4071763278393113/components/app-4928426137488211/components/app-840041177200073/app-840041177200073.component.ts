import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8571878673236829Component } from "./components/app-8571878673236829/app-8571878673236829.component";
import { App5275306943023125Component } from "./components/app-5275306943023125/app-5275306943023125.component";
import { App7516294454415789Component } from "./components/app-7516294454415789/app-7516294454415789.component";
import { App8881125573857593Component } from "./components/app-8881125573857593/app-8881125573857593.component";
import { App7229459563080001Component } from "./components/app-7229459563080001/app-7229459563080001.component";

// @ts-ignore
import html from './app-840041177200073.component.html?raw';
// @ts-ignore
import style from './app-840041177200073.component.scss?inline';

/**
 * COMPONENT: 'app-840041177200073'
 */

export const App840041177200073Component = new Component({
  name: 'app-840041177200073',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8571878673236829Component,
App5275306943023125Component,
App7516294454415789Component,
App8881125573857593Component,
App7229459563080001Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
