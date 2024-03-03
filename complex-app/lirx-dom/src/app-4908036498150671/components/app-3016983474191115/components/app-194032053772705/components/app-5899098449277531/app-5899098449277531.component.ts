import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2681458143549755Component } from "./components/app-2681458143549755/app-2681458143549755.component";
import { App3855626595173915Component } from "./components/app-3855626595173915/app-3855626595173915.component";
import { App6556924151888561Component } from "./components/app-6556924151888561/app-6556924151888561.component";
import { App272742975407891Component } from "./components/app-272742975407891/app-272742975407891.component";
import { App1390228397866963Component } from "./components/app-1390228397866963/app-1390228397866963.component";

// @ts-ignore
import html from './app-5899098449277531.component.html?raw';
// @ts-ignore
import style from './app-5899098449277531.component.scss?inline';

/**
 * COMPONENT: 'app-5899098449277531'
 */

export const App5899098449277531Component = new Component({
  name: 'app-5899098449277531',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2681458143549755Component,
App3855626595173915Component,
App6556924151888561Component,
App272742975407891Component,
App1390228397866963Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
