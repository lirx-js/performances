import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App909007936406031Component } from "./components/app-909007936406031/app-909007936406031.component";
import { App4054964344093039Component } from "./components/app-4054964344093039/app-4054964344093039.component";
import { App8730402113067317Component } from "./components/app-8730402113067317/app-8730402113067317.component";
import { App8175382617494525Component } from "./components/app-8175382617494525/app-8175382617494525.component";
import { App251698066471281Component } from "./components/app-251698066471281/app-251698066471281.component";

// @ts-ignore
import html from './app-6749342632465045.component.html?raw';
// @ts-ignore
import style from './app-6749342632465045.component.scss?inline';

/**
 * COMPONENT: 'app-6749342632465045'
 */

export const App6749342632465045Component = new Component({
  name: 'app-6749342632465045',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App909007936406031Component,
App4054964344093039Component,
App8730402113067317Component,
App8175382617494525Component,
App251698066471281Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
