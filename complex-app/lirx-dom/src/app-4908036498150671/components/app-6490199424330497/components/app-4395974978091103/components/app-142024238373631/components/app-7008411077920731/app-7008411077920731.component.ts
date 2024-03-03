import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4980421857977155Component } from "./components/app-4980421857977155/app-4980421857977155.component";
import { App1867785175703165Component } from "./components/app-1867785175703165/app-1867785175703165.component";
import { App4008050366914667Component } from "./components/app-4008050366914667/app-4008050366914667.component";
import { App3251478251015629Component } from "./components/app-3251478251015629/app-3251478251015629.component";
import { App5347470215087615Component } from "./components/app-5347470215087615/app-5347470215087615.component";

// @ts-ignore
import html from './app-7008411077920731.component.html?raw';
// @ts-ignore
import style from './app-7008411077920731.component.scss?inline';

/**
 * COMPONENT: 'app-7008411077920731'
 */

export const App7008411077920731Component = new Component({
  name: 'app-7008411077920731',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4980421857977155Component,
App1867785175703165Component,
App4008050366914667Component,
App3251478251015629Component,
App5347470215087615Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
