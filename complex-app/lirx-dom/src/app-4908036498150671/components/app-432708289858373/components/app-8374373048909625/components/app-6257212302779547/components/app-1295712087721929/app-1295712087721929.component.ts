import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5025085806590203Component } from "./components/app-5025085806590203/app-5025085806590203.component";
import { App2111778066606361Component } from "./components/app-2111778066606361/app-2111778066606361.component";
import { App6342461985462267Component } from "./components/app-6342461985462267/app-6342461985462267.component";
import { App8672339437774835Component } from "./components/app-8672339437774835/app-8672339437774835.component";
import { App4586549137691027Component } from "./components/app-4586549137691027/app-4586549137691027.component";

// @ts-ignore
import html from './app-1295712087721929.component.html?raw';
// @ts-ignore
import style from './app-1295712087721929.component.scss?inline';

/**
 * COMPONENT: 'app-1295712087721929'
 */

export const App1295712087721929Component = new Component({
  name: 'app-1295712087721929',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5025085806590203Component,
App2111778066606361Component,
App6342461985462267Component,
App8672339437774835Component,
App4586549137691027Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
