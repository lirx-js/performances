import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4785219805977523Component } from "./components/app-4785219805977523/app-4785219805977523.component";
import { App4402468275999301Component } from "./components/app-4402468275999301/app-4402468275999301.component";
import { App2569841857451497Component } from "./components/app-2569841857451497/app-2569841857451497.component";
import { App3786539132592889Component } from "./components/app-3786539132592889/app-3786539132592889.component";
import { App5148327573318651Component } from "./components/app-5148327573318651/app-5148327573318651.component";

// @ts-ignore
import html from './app-8014116122002065.component.html?raw';
// @ts-ignore
import style from './app-8014116122002065.component.scss?inline';

/**
 * COMPONENT: 'app-8014116122002065'
 */

export const App8014116122002065Component = new Component({
  name: 'app-8014116122002065',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4785219805977523Component,
App4402468275999301Component,
App2569841857451497Component,
App3786539132592889Component,
App5148327573318651Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
