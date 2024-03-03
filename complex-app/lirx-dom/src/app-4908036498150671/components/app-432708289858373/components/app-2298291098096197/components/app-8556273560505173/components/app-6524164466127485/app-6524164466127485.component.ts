import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2839795927169871Component } from "./components/app-2839795927169871/app-2839795927169871.component";
import { App5294841586627155Component } from "./components/app-5294841586627155/app-5294841586627155.component";
import { App1331264720689943Component } from "./components/app-1331264720689943/app-1331264720689943.component";
import { App4004791531239127Component } from "./components/app-4004791531239127/app-4004791531239127.component";
import { App4443103042788737Component } from "./components/app-4443103042788737/app-4443103042788737.component";

// @ts-ignore
import html from './app-6524164466127485.component.html?raw';
// @ts-ignore
import style from './app-6524164466127485.component.scss?inline';

/**
 * COMPONENT: 'app-6524164466127485'
 */

export const App6524164466127485Component = new Component({
  name: 'app-6524164466127485',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2839795927169871Component,
App5294841586627155Component,
App1331264720689943Component,
App4004791531239127Component,
App4443103042788737Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
