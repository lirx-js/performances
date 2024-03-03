import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1511929336143751Component } from "./components/app-1511929336143751/app-1511929336143751.component";
import { App2325591231215867Component } from "./components/app-2325591231215867/app-2325591231215867.component";
import { App5579820681246809Component } from "./components/app-5579820681246809/app-5579820681246809.component";
import { App8104499381436335Component } from "./components/app-8104499381436335/app-8104499381436335.component";
import { App5796227868202013Component } from "./components/app-5796227868202013/app-5796227868202013.component";

// @ts-ignore
import html from './app-8586473060560449.component.html?raw';
// @ts-ignore
import style from './app-8586473060560449.component.scss?inline';

/**
 * COMPONENT: 'app-8586473060560449'
 */

export const App8586473060560449Component = new Component({
  name: 'app-8586473060560449',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1511929336143751Component,
App2325591231215867Component,
App5579820681246809Component,
App8104499381436335Component,
App5796227868202013Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
