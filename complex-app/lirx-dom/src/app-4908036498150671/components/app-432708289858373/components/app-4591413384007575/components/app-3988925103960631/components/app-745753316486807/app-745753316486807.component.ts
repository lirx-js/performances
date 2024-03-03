import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1020199119944763Component } from "./components/app-1020199119944763/app-1020199119944763.component";
import { App8185018905741317Component } from "./components/app-8185018905741317/app-8185018905741317.component";
import { App2331435713628305Component } from "./components/app-2331435713628305/app-2331435713628305.component";
import { App2869552456865549Component } from "./components/app-2869552456865549/app-2869552456865549.component";
import { App2696437777022195Component } from "./components/app-2696437777022195/app-2696437777022195.component";

// @ts-ignore
import html from './app-745753316486807.component.html?raw';
// @ts-ignore
import style from './app-745753316486807.component.scss?inline';

/**
 * COMPONENT: 'app-745753316486807'
 */

export const App745753316486807Component = new Component({
  name: 'app-745753316486807',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1020199119944763Component,
App8185018905741317Component,
App2331435713628305Component,
App2869552456865549Component,
App2696437777022195Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
