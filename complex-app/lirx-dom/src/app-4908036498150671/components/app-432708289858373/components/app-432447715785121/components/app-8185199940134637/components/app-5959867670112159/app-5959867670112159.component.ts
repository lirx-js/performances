import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5557782020204229Component } from "./components/app-5557782020204229/app-5557782020204229.component";
import { App4501791762404597Component } from "./components/app-4501791762404597/app-4501791762404597.component";
import { App4036320677537731Component } from "./components/app-4036320677537731/app-4036320677537731.component";
import { App6265916779598619Component } from "./components/app-6265916779598619/app-6265916779598619.component";
import { App2943801266078399Component } from "./components/app-2943801266078399/app-2943801266078399.component";

// @ts-ignore
import html from './app-5959867670112159.component.html?raw';
// @ts-ignore
import style from './app-5959867670112159.component.scss?inline';

/**
 * COMPONENT: 'app-5959867670112159'
 */

export const App5959867670112159Component = new Component({
  name: 'app-5959867670112159',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5557782020204229Component,
App4501791762404597Component,
App4036320677537731Component,
App6265916779598619Component,
App2943801266078399Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
