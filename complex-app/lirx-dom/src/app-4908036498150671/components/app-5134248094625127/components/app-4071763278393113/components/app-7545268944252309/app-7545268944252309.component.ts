import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App616562892280655Component } from "./components/app-616562892280655/app-616562892280655.component";
import { App1640765946521195Component } from "./components/app-1640765946521195/app-1640765946521195.component";
import { App6709954886433631Component } from "./components/app-6709954886433631/app-6709954886433631.component";
import { App4128148202454983Component } from "./components/app-4128148202454983/app-4128148202454983.component";
import { App7897320656605995Component } from "./components/app-7897320656605995/app-7897320656605995.component";

// @ts-ignore
import html from './app-7545268944252309.component.html?raw';
// @ts-ignore
import style from './app-7545268944252309.component.scss?inline';

/**
 * COMPONENT: 'app-7545268944252309'
 */

export const App7545268944252309Component = new Component({
  name: 'app-7545268944252309',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App616562892280655Component,
App1640765946521195Component,
App6709954886433631Component,
App4128148202454983Component,
App7897320656605995Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
