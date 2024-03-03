import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5841735244895057Component } from "./components/app-5841735244895057/app-5841735244895057.component";
import { App2357201564299713Component } from "./components/app-2357201564299713/app-2357201564299713.component";
import { App6884948704628477Component } from "./components/app-6884948704628477/app-6884948704628477.component";
import { App2222718315337319Component } from "./components/app-2222718315337319/app-2222718315337319.component";
import { App4578736316353631Component } from "./components/app-4578736316353631/app-4578736316353631.component";

// @ts-ignore
import html from './app-8001586514768719.component.html?raw';
// @ts-ignore
import style from './app-8001586514768719.component.scss?inline';

/**
 * COMPONENT: 'app-8001586514768719'
 */

export const App8001586514768719Component = new Component({
  name: 'app-8001586514768719',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5841735244895057Component,
App2357201564299713Component,
App6884948704628477Component,
App2222718315337319Component,
App4578736316353631Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
