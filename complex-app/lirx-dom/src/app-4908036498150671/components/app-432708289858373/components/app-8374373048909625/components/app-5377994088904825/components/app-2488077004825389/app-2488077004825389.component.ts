import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8371077533777299Component } from "./components/app-8371077533777299/app-8371077533777299.component";
import { App8277002471144795Component } from "./components/app-8277002471144795/app-8277002471144795.component";
import { App1635410974075483Component } from "./components/app-1635410974075483/app-1635410974075483.component";
import { App982751728273903Component } from "./components/app-982751728273903/app-982751728273903.component";
import { App6103806299050499Component } from "./components/app-6103806299050499/app-6103806299050499.component";

// @ts-ignore
import html from './app-2488077004825389.component.html?raw';
// @ts-ignore
import style from './app-2488077004825389.component.scss?inline';

/**
 * COMPONENT: 'app-2488077004825389'
 */

export const App2488077004825389Component = new Component({
  name: 'app-2488077004825389',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8371077533777299Component,
App8277002471144795Component,
App1635410974075483Component,
App982751728273903Component,
App6103806299050499Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
