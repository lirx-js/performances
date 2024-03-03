import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8301387635957331Component } from "./components/app-8301387635957331/app-8301387635957331.component";
import { App3684895956771263Component } from "./components/app-3684895956771263/app-3684895956771263.component";
import { App533523573801621Component } from "./components/app-533523573801621/app-533523573801621.component";
import { App8930037593479195Component } from "./components/app-8930037593479195/app-8930037593479195.component";
import { App4104158568294425Component } from "./components/app-4104158568294425/app-4104158568294425.component";

// @ts-ignore
import html from './app-2583504726741721.component.html?raw';
// @ts-ignore
import style from './app-2583504726741721.component.scss?inline';

/**
 * COMPONENT: 'app-2583504726741721'
 */

export const App2583504726741721Component = new Component({
  name: 'app-2583504726741721',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8301387635957331Component,
App3684895956771263Component,
App533523573801621Component,
App8930037593479195Component,
App4104158568294425Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
