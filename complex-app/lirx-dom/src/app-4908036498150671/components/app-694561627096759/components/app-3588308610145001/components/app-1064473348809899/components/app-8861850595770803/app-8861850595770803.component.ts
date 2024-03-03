import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3436348559457065Component } from "./components/app-3436348559457065/app-3436348559457065.component";
import { App4095653894738559Component } from "./components/app-4095653894738559/app-4095653894738559.component";
import { App1850318221928997Component } from "./components/app-1850318221928997/app-1850318221928997.component";
import { App8818560777621669Component } from "./components/app-8818560777621669/app-8818560777621669.component";
import { App922839037497453Component } from "./components/app-922839037497453/app-922839037497453.component";

// @ts-ignore
import html from './app-8861850595770803.component.html?raw';
// @ts-ignore
import style from './app-8861850595770803.component.scss?inline';

/**
 * COMPONENT: 'app-8861850595770803'
 */

export const App8861850595770803Component = new Component({
  name: 'app-8861850595770803',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3436348559457065Component,
App4095653894738559Component,
App1850318221928997Component,
App8818560777621669Component,
App922839037497453Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
