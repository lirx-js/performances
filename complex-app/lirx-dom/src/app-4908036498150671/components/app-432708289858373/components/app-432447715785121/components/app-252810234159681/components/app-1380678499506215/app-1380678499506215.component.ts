import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8667503418860895Component } from "./components/app-8667503418860895/app-8667503418860895.component";
import { App5077935812625479Component } from "./components/app-5077935812625479/app-5077935812625479.component";
import { App7263023405858543Component } from "./components/app-7263023405858543/app-7263023405858543.component";
import { App6550271685902027Component } from "./components/app-6550271685902027/app-6550271685902027.component";
import { App823326319055507Component } from "./components/app-823326319055507/app-823326319055507.component";

// @ts-ignore
import html from './app-1380678499506215.component.html?raw';
// @ts-ignore
import style from './app-1380678499506215.component.scss?inline';

/**
 * COMPONENT: 'app-1380678499506215'
 */

export const App1380678499506215Component = new Component({
  name: 'app-1380678499506215',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8667503418860895Component,
App5077935812625479Component,
App7263023405858543Component,
App6550271685902027Component,
App823326319055507Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
