import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5302332564639551Component } from "./components/app-5302332564639551/app-5302332564639551.component";
import { App6943199479449637Component } from "./components/app-6943199479449637/app-6943199479449637.component";
import { App6772079565677835Component } from "./components/app-6772079565677835/app-6772079565677835.component";
import { App6125788018340479Component } from "./components/app-6125788018340479/app-6125788018340479.component";
import { App1968061764798197Component } from "./components/app-1968061764798197/app-1968061764798197.component";

// @ts-ignore
import html from './app-2028955374813143.component.html?raw';
// @ts-ignore
import style from './app-2028955374813143.component.scss?inline';

/**
 * COMPONENT: 'app-2028955374813143'
 */

export const App2028955374813143Component = new Component({
  name: 'app-2028955374813143',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5302332564639551Component,
App6943199479449637Component,
App6772079565677835Component,
App6125788018340479Component,
App1968061764798197Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
