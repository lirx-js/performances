import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2303344447425053Component } from "./components/app-2303344447425053/app-2303344447425053.component";
import { App3042955354160155Component } from "./components/app-3042955354160155/app-3042955354160155.component";
import { App6352127393835489Component } from "./components/app-6352127393835489/app-6352127393835489.component";
import { App329647244634863Component } from "./components/app-329647244634863/app-329647244634863.component";
import { App3518533685598065Component } from "./components/app-3518533685598065/app-3518533685598065.component";

// @ts-ignore
import html from './app-730862712621371.component.html?raw';
// @ts-ignore
import style from './app-730862712621371.component.scss?inline';

/**
 * COMPONENT: 'app-730862712621371'
 */

export const App730862712621371Component = new Component({
  name: 'app-730862712621371',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2303344447425053Component,
App3042955354160155Component,
App6352127393835489Component,
App329647244634863Component,
App3518533685598065Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
