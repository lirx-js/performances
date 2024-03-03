import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4606328431875537Component } from "./components/app-4606328431875537/app-4606328431875537.component";
import { App3702589850396081Component } from "./components/app-3702589850396081/app-3702589850396081.component";
import { App6161795521447115Component } from "./components/app-6161795521447115/app-6161795521447115.component";
import { App2239400216865877Component } from "./components/app-2239400216865877/app-2239400216865877.component";
import { App6517964160452055Component } from "./components/app-6517964160452055/app-6517964160452055.component";

// @ts-ignore
import html from './app-3692222142412611.component.html?raw';
// @ts-ignore
import style from './app-3692222142412611.component.scss?inline';

/**
 * COMPONENT: 'app-3692222142412611'
 */

export const App3692222142412611Component = new Component({
  name: 'app-3692222142412611',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4606328431875537Component,
App3702589850396081Component,
App6161795521447115Component,
App2239400216865877Component,
App6517964160452055Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
