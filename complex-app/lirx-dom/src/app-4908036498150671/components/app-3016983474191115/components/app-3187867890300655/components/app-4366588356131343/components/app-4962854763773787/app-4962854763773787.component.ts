import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6808412541097345Component } from "./components/app-6808412541097345/app-6808412541097345.component";
import { App7382383721938079Component } from "./components/app-7382383721938079/app-7382383721938079.component";
import { App2228768248827257Component } from "./components/app-2228768248827257/app-2228768248827257.component";
import { App4335470539198527Component } from "./components/app-4335470539198527/app-4335470539198527.component";
import { App7548701991714077Component } from "./components/app-7548701991714077/app-7548701991714077.component";

// @ts-ignore
import html from './app-4962854763773787.component.html?raw';
// @ts-ignore
import style from './app-4962854763773787.component.scss?inline';

/**
 * COMPONENT: 'app-4962854763773787'
 */

export const App4962854763773787Component = new Component({
  name: 'app-4962854763773787',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6808412541097345Component,
App7382383721938079Component,
App2228768248827257Component,
App4335470539198527Component,
App7548701991714077Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
