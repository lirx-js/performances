import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2324778766297925Component } from "./components/app-2324778766297925/app-2324778766297925.component";
import { App3608725444349423Component } from "./components/app-3608725444349423/app-3608725444349423.component";
import { App6109447672399125Component } from "./components/app-6109447672399125/app-6109447672399125.component";
import { App1247419464428895Component } from "./components/app-1247419464428895/app-1247419464428895.component";
import { App2601919940444937Component } from "./components/app-2601919940444937/app-2601919940444937.component";

// @ts-ignore
import html from './app-3247568604942943.component.html?raw';
// @ts-ignore
import style from './app-3247568604942943.component.scss?inline';

/**
 * COMPONENT: 'app-3247568604942943'
 */

export const App3247568604942943Component = new Component({
  name: 'app-3247568604942943',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2324778766297925Component,
App3608725444349423Component,
App6109447672399125Component,
App1247419464428895Component,
App2601919940444937Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
