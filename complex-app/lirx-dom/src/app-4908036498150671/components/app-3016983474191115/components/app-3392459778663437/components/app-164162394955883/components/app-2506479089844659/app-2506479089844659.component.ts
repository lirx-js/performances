import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3859206005289727Component } from "./components/app-3859206005289727/app-3859206005289727.component";
import { App8450033392162983Component } from "./components/app-8450033392162983/app-8450033392162983.component";
import { App8388153219529275Component } from "./components/app-8388153219529275/app-8388153219529275.component";
import { App3546251931019437Component } from "./components/app-3546251931019437/app-3546251931019437.component";
import { App6083243662255171Component } from "./components/app-6083243662255171/app-6083243662255171.component";

// @ts-ignore
import html from './app-2506479089844659.component.html?raw';
// @ts-ignore
import style from './app-2506479089844659.component.scss?inline';

/**
 * COMPONENT: 'app-2506479089844659'
 */

export const App2506479089844659Component = new Component({
  name: 'app-2506479089844659',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3859206005289727Component,
App8450033392162983Component,
App8388153219529275Component,
App3546251931019437Component,
App6083243662255171Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
