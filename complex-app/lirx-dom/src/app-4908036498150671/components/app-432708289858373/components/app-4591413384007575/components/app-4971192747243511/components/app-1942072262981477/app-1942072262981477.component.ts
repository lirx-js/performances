import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7757150787829909Component } from "./components/app-7757150787829909/app-7757150787829909.component";
import { App7585810147977333Component } from "./components/app-7585810147977333/app-7585810147977333.component";
import { App6612755725690851Component } from "./components/app-6612755725690851/app-6612755725690851.component";
import { App6321078254436013Component } from "./components/app-6321078254436013/app-6321078254436013.component";
import { App5550463099685883Component } from "./components/app-5550463099685883/app-5550463099685883.component";

// @ts-ignore
import html from './app-1942072262981477.component.html?raw';
// @ts-ignore
import style from './app-1942072262981477.component.scss?inline';

/**
 * COMPONENT: 'app-1942072262981477'
 */

export const App1942072262981477Component = new Component({
  name: 'app-1942072262981477',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7757150787829909Component,
App7585810147977333Component,
App6612755725690851Component,
App6321078254436013Component,
App5550463099685883Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
