import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1974378579995305Component } from "./components/app-1974378579995305/app-1974378579995305.component";
import { App8499664758104991Component } from "./components/app-8499664758104991/app-8499664758104991.component";
import { App3985409376968859Component } from "./components/app-3985409376968859/app-3985409376968859.component";
import { App1620399552383809Component } from "./components/app-1620399552383809/app-1620399552383809.component";
import { App258523040865355Component } from "./components/app-258523040865355/app-258523040865355.component";

// @ts-ignore
import html from './app-3517603192848299.component.html?raw';
// @ts-ignore
import style from './app-3517603192848299.component.scss?inline';

/**
 * COMPONENT: 'app-3517603192848299'
 */

export const App3517603192848299Component = new Component({
  name: 'app-3517603192848299',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1974378579995305Component,
App8499664758104991Component,
App3985409376968859Component,
App1620399552383809Component,
App258523040865355Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
