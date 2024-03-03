import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App583625105009077Component } from "./components/app-583625105009077/app-583625105009077.component";
import { App3428810378625213Component } from "./components/app-3428810378625213/app-3428810378625213.component";
import { App3562216971751277Component } from "./components/app-3562216971751277/app-3562216971751277.component";
import { App7677204508940969Component } from "./components/app-7677204508940969/app-7677204508940969.component";
import { App6596094827777929Component } from "./components/app-6596094827777929/app-6596094827777929.component";

// @ts-ignore
import html from './app-8571653077869977.component.html?raw';
// @ts-ignore
import style from './app-8571653077869977.component.scss?inline';

/**
 * COMPONENT: 'app-8571653077869977'
 */

export const App8571653077869977Component = new Component({
  name: 'app-8571653077869977',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App583625105009077Component,
App3428810378625213Component,
App3562216971751277Component,
App7677204508940969Component,
App6596094827777929Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
