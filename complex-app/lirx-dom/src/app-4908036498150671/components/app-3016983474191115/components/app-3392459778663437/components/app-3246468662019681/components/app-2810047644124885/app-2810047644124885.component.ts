import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3315370222064707Component } from "./components/app-3315370222064707/app-3315370222064707.component";
import { App196015950750403Component } from "./components/app-196015950750403/app-196015950750403.component";
import { App703045647518921Component } from "./components/app-703045647518921/app-703045647518921.component";
import { App4713758364802089Component } from "./components/app-4713758364802089/app-4713758364802089.component";
import { App2824646203441477Component } from "./components/app-2824646203441477/app-2824646203441477.component";

// @ts-ignore
import html from './app-2810047644124885.component.html?raw';
// @ts-ignore
import style from './app-2810047644124885.component.scss?inline';

/**
 * COMPONENT: 'app-2810047644124885'
 */

export const App2810047644124885Component = new Component({
  name: 'app-2810047644124885',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3315370222064707Component,
App196015950750403Component,
App703045647518921Component,
App4713758364802089Component,
App2824646203441477Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
