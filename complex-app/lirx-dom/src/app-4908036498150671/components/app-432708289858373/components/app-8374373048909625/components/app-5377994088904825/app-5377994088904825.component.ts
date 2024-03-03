import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3704653980560489Component } from "./components/app-3704653980560489/app-3704653980560489.component";
import { App8277015421172309Component } from "./components/app-8277015421172309/app-8277015421172309.component";
import { App8577320024329973Component } from "./components/app-8577320024329973/app-8577320024329973.component";
import { App6688560624719333Component } from "./components/app-6688560624719333/app-6688560624719333.component";
import { App2488077004825389Component } from "./components/app-2488077004825389/app-2488077004825389.component";

// @ts-ignore
import html from './app-5377994088904825.component.html?raw';
// @ts-ignore
import style from './app-5377994088904825.component.scss?inline';

/**
 * COMPONENT: 'app-5377994088904825'
 */

export const App5377994088904825Component = new Component({
  name: 'app-5377994088904825',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3704653980560489Component,
App8277015421172309Component,
App8577320024329973Component,
App6688560624719333Component,
App2488077004825389Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
