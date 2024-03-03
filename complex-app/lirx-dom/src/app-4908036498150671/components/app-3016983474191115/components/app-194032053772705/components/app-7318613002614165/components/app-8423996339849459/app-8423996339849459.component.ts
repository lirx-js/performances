import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App797595037556657Component } from "./components/app-797595037556657/app-797595037556657.component";
import { App6600924778128833Component } from "./components/app-6600924778128833/app-6600924778128833.component";
import { App3959891200965567Component } from "./components/app-3959891200965567/app-3959891200965567.component";
import { App842568758492193Component } from "./components/app-842568758492193/app-842568758492193.component";
import { App4493959677207627Component } from "./components/app-4493959677207627/app-4493959677207627.component";

// @ts-ignore
import html from './app-8423996339849459.component.html?raw';
// @ts-ignore
import style from './app-8423996339849459.component.scss?inline';

/**
 * COMPONENT: 'app-8423996339849459'
 */

export const App8423996339849459Component = new Component({
  name: 'app-8423996339849459',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App797595037556657Component,
App6600924778128833Component,
App3959891200965567Component,
App842568758492193Component,
App4493959677207627Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
