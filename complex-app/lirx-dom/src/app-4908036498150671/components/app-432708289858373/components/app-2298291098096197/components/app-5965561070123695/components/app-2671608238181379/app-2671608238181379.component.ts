import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App943318783018561Component } from "./components/app-943318783018561/app-943318783018561.component";
import { App3901493798276921Component } from "./components/app-3901493798276921/app-3901493798276921.component";
import { App6707536101360879Component } from "./components/app-6707536101360879/app-6707536101360879.component";
import { App8102771710683233Component } from "./components/app-8102771710683233/app-8102771710683233.component";
import { App8873031609994429Component } from "./components/app-8873031609994429/app-8873031609994429.component";

// @ts-ignore
import html from './app-2671608238181379.component.html?raw';
// @ts-ignore
import style from './app-2671608238181379.component.scss?inline';

/**
 * COMPONENT: 'app-2671608238181379'
 */

export const App2671608238181379Component = new Component({
  name: 'app-2671608238181379',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App943318783018561Component,
App3901493798276921Component,
App6707536101360879Component,
App8102771710683233Component,
App8873031609994429Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
