import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1924584649387927Component } from "./components/app-1924584649387927/app-1924584649387927.component";
import { App3708289457437429Component } from "./components/app-3708289457437429/app-3708289457437429.component";
import { App8154873430552933Component } from "./components/app-8154873430552933/app-8154873430552933.component";
import { App8333946364345311Component } from "./components/app-8333946364345311/app-8333946364345311.component";
import { App2672699364827423Component } from "./components/app-2672699364827423/app-2672699364827423.component";

// @ts-ignore
import html from './app-8461962732004553.component.html?raw';
// @ts-ignore
import style from './app-8461962732004553.component.scss?inline';

/**
 * COMPONENT: 'app-8461962732004553'
 */

export const App8461962732004553Component = new Component({
  name: 'app-8461962732004553',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1924584649387927Component,
App3708289457437429Component,
App8154873430552933Component,
App8333946364345311Component,
App2672699364827423Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
