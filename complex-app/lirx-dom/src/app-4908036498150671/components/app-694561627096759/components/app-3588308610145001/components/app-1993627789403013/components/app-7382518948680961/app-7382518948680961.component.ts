import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8159085916682783Component } from "./components/app-8159085916682783/app-8159085916682783.component";
import { App8312473104791823Component } from "./components/app-8312473104791823/app-8312473104791823.component";
import { App8128699046757265Component } from "./components/app-8128699046757265/app-8128699046757265.component";
import { App8688128271963393Component } from "./components/app-8688128271963393/app-8688128271963393.component";
import { App8288224927394757Component } from "./components/app-8288224927394757/app-8288224927394757.component";

// @ts-ignore
import html from './app-7382518948680961.component.html?raw';
// @ts-ignore
import style from './app-7382518948680961.component.scss?inline';

/**
 * COMPONENT: 'app-7382518948680961'
 */

export const App7382518948680961Component = new Component({
  name: 'app-7382518948680961',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8159085916682783Component,
App8312473104791823Component,
App8128699046757265Component,
App8688128271963393Component,
App8288224927394757Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
