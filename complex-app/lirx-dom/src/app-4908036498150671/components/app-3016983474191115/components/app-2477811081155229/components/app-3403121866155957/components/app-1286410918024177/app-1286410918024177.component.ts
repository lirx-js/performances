import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8190839440199049Component } from "./components/app-8190839440199049/app-8190839440199049.component";
import { App5728132848126755Component } from "./components/app-5728132848126755/app-5728132848126755.component";
import { App6623830593290575Component } from "./components/app-6623830593290575/app-6623830593290575.component";
import { App5801807961565769Component } from "./components/app-5801807961565769/app-5801807961565769.component";
import { App3025812300638365Component } from "./components/app-3025812300638365/app-3025812300638365.component";

// @ts-ignore
import html from './app-1286410918024177.component.html?raw';
// @ts-ignore
import style from './app-1286410918024177.component.scss?inline';

/**
 * COMPONENT: 'app-1286410918024177'
 */

export const App1286410918024177Component = new Component({
  name: 'app-1286410918024177',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8190839440199049Component,
App5728132848126755Component,
App6623830593290575Component,
App5801807961565769Component,
App3025812300638365Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
