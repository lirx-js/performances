import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5060105705606141Component } from "./components/app-5060105705606141/app-5060105705606141.component";
import { App4709314064584519Component } from "./components/app-4709314064584519/app-4709314064584519.component";
import { App1861639879539389Component } from "./components/app-1861639879539389/app-1861639879539389.component";
import { App6791631182073147Component } from "./components/app-6791631182073147/app-6791631182073147.component";
import { App3462212427583195Component } from "./components/app-3462212427583195/app-3462212427583195.component";

// @ts-ignore
import html from './app-4146753150824953.component.html?raw';
// @ts-ignore
import style from './app-4146753150824953.component.scss?inline';

/**
 * COMPONENT: 'app-4146753150824953'
 */

export const App4146753150824953Component = new Component({
  name: 'app-4146753150824953',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5060105705606141Component,
App4709314064584519Component,
App1861639879539389Component,
App6791631182073147Component,
App3462212427583195Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
