import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1795583232523137Component } from "./components/app-1795583232523137/app-1795583232523137.component";
import { App2375316904746033Component } from "./components/app-2375316904746033/app-2375316904746033.component";
import { App2999879122172221Component } from "./components/app-2999879122172221/app-2999879122172221.component";
import { App6688658504976697Component } from "./components/app-6688658504976697/app-6688658504976697.component";
import { App6834978915023537Component } from "./components/app-6834978915023537/app-6834978915023537.component";

// @ts-ignore
import html from './app-1752941138749365.component.html?raw';
// @ts-ignore
import style from './app-1752941138749365.component.scss?inline';

/**
 * COMPONENT: 'app-1752941138749365'
 */

export const App1752941138749365Component = new Component({
  name: 'app-1752941138749365',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1795583232523137Component,
App2375316904746033Component,
App2999879122172221Component,
App6688658504976697Component,
App6834978915023537Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
