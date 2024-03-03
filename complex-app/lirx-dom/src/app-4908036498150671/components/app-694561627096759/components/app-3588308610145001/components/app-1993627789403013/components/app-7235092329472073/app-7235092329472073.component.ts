import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8551259305811379Component } from "./components/app-8551259305811379/app-8551259305811379.component";
import { App4519853657931525Component } from "./components/app-4519853657931525/app-4519853657931525.component";
import { App6253328244769841Component } from "./components/app-6253328244769841/app-6253328244769841.component";
import { App1991811523690375Component } from "./components/app-1991811523690375/app-1991811523690375.component";
import { App2963669021841835Component } from "./components/app-2963669021841835/app-2963669021841835.component";

// @ts-ignore
import html from './app-7235092329472073.component.html?raw';
// @ts-ignore
import style from './app-7235092329472073.component.scss?inline';

/**
 * COMPONENT: 'app-7235092329472073'
 */

export const App7235092329472073Component = new Component({
  name: 'app-7235092329472073',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8551259305811379Component,
App4519853657931525Component,
App6253328244769841Component,
App1991811523690375Component,
App2963669021841835Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
