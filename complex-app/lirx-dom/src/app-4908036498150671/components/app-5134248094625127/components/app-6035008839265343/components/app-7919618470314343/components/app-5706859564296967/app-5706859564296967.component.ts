import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4637707102267715Component } from "./components/app-4637707102267715/app-4637707102267715.component";
import { App2122117695627009Component } from "./components/app-2122117695627009/app-2122117695627009.component";
import { App4943874791776333Component } from "./components/app-4943874791776333/app-4943874791776333.component";
import { App888620854850895Component } from "./components/app-888620854850895/app-888620854850895.component";
import { App778680271422643Component } from "./components/app-778680271422643/app-778680271422643.component";

// @ts-ignore
import html from './app-5706859564296967.component.html?raw';
// @ts-ignore
import style from './app-5706859564296967.component.scss?inline';

/**
 * COMPONENT: 'app-5706859564296967'
 */

export const App5706859564296967Component = new Component({
  name: 'app-5706859564296967',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4637707102267715Component,
App2122117695627009Component,
App4943874791776333Component,
App888620854850895Component,
App778680271422643Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
