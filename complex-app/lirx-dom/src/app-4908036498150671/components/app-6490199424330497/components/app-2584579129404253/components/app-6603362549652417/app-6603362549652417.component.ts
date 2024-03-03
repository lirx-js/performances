import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1527712656815693Component } from "./components/app-1527712656815693/app-1527712656815693.component";
import { App5466551350478107Component } from "./components/app-5466551350478107/app-5466551350478107.component";
import { App6545378358317897Component } from "./components/app-6545378358317897/app-6545378358317897.component";
import { App364810353501197Component } from "./components/app-364810353501197/app-364810353501197.component";
import { App1658575700394155Component } from "./components/app-1658575700394155/app-1658575700394155.component";

// @ts-ignore
import html from './app-6603362549652417.component.html?raw';
// @ts-ignore
import style from './app-6603362549652417.component.scss?inline';

/**
 * COMPONENT: 'app-6603362549652417'
 */

export const App6603362549652417Component = new Component({
  name: 'app-6603362549652417',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1527712656815693Component,
App5466551350478107Component,
App6545378358317897Component,
App364810353501197Component,
App1658575700394155Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
