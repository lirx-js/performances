import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2014984164194025Component } from "./components/app-2014984164194025/app-2014984164194025.component";
import { App7149398011731659Component } from "./components/app-7149398011731659/app-7149398011731659.component";
import { App331119409480383Component } from "./components/app-331119409480383/app-331119409480383.component";
import { App6870832060498005Component } from "./components/app-6870832060498005/app-6870832060498005.component";
import { App7790615505969341Component } from "./components/app-7790615505969341/app-7790615505969341.component";

// @ts-ignore
import html from './app-1726951014716549.component.html?raw';
// @ts-ignore
import style from './app-1726951014716549.component.scss?inline';

/**
 * COMPONENT: 'app-1726951014716549'
 */

export const App1726951014716549Component = new Component({
  name: 'app-1726951014716549',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2014984164194025Component,
App7149398011731659Component,
App331119409480383Component,
App6870832060498005Component,
App7790615505969341Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
