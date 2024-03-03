import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4955058149768081Component } from "./components/app-4955058149768081/app-4955058149768081.component";
import { App1624505808282789Component } from "./components/app-1624505808282789/app-1624505808282789.component";
import { App6655705867451235Component } from "./components/app-6655705867451235/app-6655705867451235.component";
import { App6740078405905923Component } from "./components/app-6740078405905923/app-6740078405905923.component";
import { App5658656600981523Component } from "./components/app-5658656600981523/app-5658656600981523.component";

// @ts-ignore
import html from './app-2689807124786453.component.html?raw';
// @ts-ignore
import style from './app-2689807124786453.component.scss?inline';

/**
 * COMPONENT: 'app-2689807124786453'
 */

export const App2689807124786453Component = new Component({
  name: 'app-2689807124786453',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4955058149768081Component,
App1624505808282789Component,
App6655705867451235Component,
App6740078405905923Component,
App5658656600981523Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
