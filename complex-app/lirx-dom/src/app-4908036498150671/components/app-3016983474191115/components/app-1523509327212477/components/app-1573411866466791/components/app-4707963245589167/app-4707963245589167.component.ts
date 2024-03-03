import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App838546210189459Component } from "./components/app-838546210189459/app-838546210189459.component";
import { App5960876911502693Component } from "./components/app-5960876911502693/app-5960876911502693.component";
import { App1788325113064709Component } from "./components/app-1788325113064709/app-1788325113064709.component";
import { App6085716561100211Component } from "./components/app-6085716561100211/app-6085716561100211.component";
import { App5355290593857295Component } from "./components/app-5355290593857295/app-5355290593857295.component";

// @ts-ignore
import html from './app-4707963245589167.component.html?raw';
// @ts-ignore
import style from './app-4707963245589167.component.scss?inline';

/**
 * COMPONENT: 'app-4707963245589167'
 */

export const App4707963245589167Component = new Component({
  name: 'app-4707963245589167',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App838546210189459Component,
App5960876911502693Component,
App1788325113064709Component,
App6085716561100211Component,
App5355290593857295Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
