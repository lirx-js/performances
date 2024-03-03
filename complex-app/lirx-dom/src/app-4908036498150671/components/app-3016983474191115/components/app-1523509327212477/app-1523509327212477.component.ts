import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1467039002750861Component } from "./components/app-1467039002750861/app-1467039002750861.component";
import { App1573411866466791Component } from "./components/app-1573411866466791/app-1573411866466791.component";
import { App1257698593035777Component } from "./components/app-1257698593035777/app-1257698593035777.component";
import { App1467021005015311Component } from "./components/app-1467021005015311/app-1467021005015311.component";
import { App1267680234913607Component } from "./components/app-1267680234913607/app-1267680234913607.component";

// @ts-ignore
import html from './app-1523509327212477.component.html?raw';
// @ts-ignore
import style from './app-1523509327212477.component.scss?inline';

/**
 * COMPONENT: 'app-1523509327212477'
 */

export const App1523509327212477Component = new Component({
  name: 'app-1523509327212477',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1467039002750861Component,
App1573411866466791Component,
App1257698593035777Component,
App1467021005015311Component,
App1267680234913607Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
