import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4766181314209789Component } from "./components/app-4766181314209789/app-4766181314209789.component";
import { App721487286037573Component } from "./components/app-721487286037573/app-721487286037573.component";
import { App4860382668991711Component } from "./components/app-4860382668991711/app-4860382668991711.component";
import { App4165244153759637Component } from "./components/app-4165244153759637/app-4165244153759637.component";
import { App1580403885004701Component } from "./components/app-1580403885004701/app-1580403885004701.component";

// @ts-ignore
import html from './app-8669170294182547.component.html?raw';
// @ts-ignore
import style from './app-8669170294182547.component.scss?inline';

/**
 * COMPONENT: 'app-8669170294182547'
 */

export const App8669170294182547Component = new Component({
  name: 'app-8669170294182547',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4766181314209789Component,
App721487286037573Component,
App4860382668991711Component,
App4165244153759637Component,
App1580403885004701Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
