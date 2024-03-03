import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2270540524099545Component } from "./components/app-2270540524099545/app-2270540524099545.component";
import { App6911894852626821Component } from "./components/app-6911894852626821/app-6911894852626821.component";
import { App8903884327796133Component } from "./components/app-8903884327796133/app-8903884327796133.component";
import { App5949929396528907Component } from "./components/app-5949929396528907/app-5949929396528907.component";
import { App5080253497749019Component } from "./components/app-5080253497749019/app-5080253497749019.component";

// @ts-ignore
import html from './app-1735494691523487.component.html?raw';
// @ts-ignore
import style from './app-1735494691523487.component.scss?inline';

/**
 * COMPONENT: 'app-1735494691523487'
 */

export const App1735494691523487Component = new Component({
  name: 'app-1735494691523487',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2270540524099545Component,
App6911894852626821Component,
App8903884327796133Component,
App5949929396528907Component,
App5080253497749019Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
