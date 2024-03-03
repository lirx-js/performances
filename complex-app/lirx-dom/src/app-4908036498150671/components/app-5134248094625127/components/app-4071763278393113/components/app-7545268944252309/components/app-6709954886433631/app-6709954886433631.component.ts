import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8197534870721529Component } from "./components/app-8197534870721529/app-8197534870721529.component";
import { App7425860501105049Component } from "./components/app-7425860501105049/app-7425860501105049.component";
import { App6960623708143337Component } from "./components/app-6960623708143337/app-6960623708143337.component";
import { App3116921445901387Component } from "./components/app-3116921445901387/app-3116921445901387.component";
import { App6244834315580257Component } from "./components/app-6244834315580257/app-6244834315580257.component";

// @ts-ignore
import html from './app-6709954886433631.component.html?raw';
// @ts-ignore
import style from './app-6709954886433631.component.scss?inline';

/**
 * COMPONENT: 'app-6709954886433631'
 */

export const App6709954886433631Component = new Component({
  name: 'app-6709954886433631',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8197534870721529Component,
App7425860501105049Component,
App6960623708143337Component,
App3116921445901387Component,
App6244834315580257Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
