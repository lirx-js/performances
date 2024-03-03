import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8611010150641153Component } from "./components/app-8611010150641153/app-8611010150641153.component";
import { App7027230534274669Component } from "./components/app-7027230534274669/app-7027230534274669.component";
import { App6068534981409925Component } from "./components/app-6068534981409925/app-6068534981409925.component";
import { App5399776710280049Component } from "./components/app-5399776710280049/app-5399776710280049.component";
import { App7121472386063455Component } from "./components/app-7121472386063455/app-7121472386063455.component";

// @ts-ignore
import html from './app-3237632943455459.component.html?raw';
// @ts-ignore
import style from './app-3237632943455459.component.scss?inline';

/**
 * COMPONENT: 'app-3237632943455459'
 */

export const App3237632943455459Component = new Component({
  name: 'app-3237632943455459',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8611010150641153Component,
App7027230534274669Component,
App6068534981409925Component,
App5399776710280049Component,
App7121472386063455Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
