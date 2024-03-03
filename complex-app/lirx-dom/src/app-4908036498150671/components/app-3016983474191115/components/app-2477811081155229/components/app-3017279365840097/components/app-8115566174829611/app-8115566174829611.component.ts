import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4932122961587809Component } from "./components/app-4932122961587809/app-4932122961587809.component";
import { App2632980444219915Component } from "./components/app-2632980444219915/app-2632980444219915.component";
import { App3814302115173283Component } from "./components/app-3814302115173283/app-3814302115173283.component";
import { App3550383453858099Component } from "./components/app-3550383453858099/app-3550383453858099.component";
import { App8914566431355287Component } from "./components/app-8914566431355287/app-8914566431355287.component";

// @ts-ignore
import html from './app-8115566174829611.component.html?raw';
// @ts-ignore
import style from './app-8115566174829611.component.scss?inline';

/**
 * COMPONENT: 'app-8115566174829611'
 */

export const App8115566174829611Component = new Component({
  name: 'app-8115566174829611',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4932122961587809Component,
App2632980444219915Component,
App3814302115173283Component,
App3550383453858099Component,
App8914566431355287Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
