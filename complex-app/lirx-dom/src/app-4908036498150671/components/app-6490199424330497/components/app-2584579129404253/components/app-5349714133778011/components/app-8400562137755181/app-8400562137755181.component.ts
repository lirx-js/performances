import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2209409053848129Component } from "./components/app-2209409053848129/app-2209409053848129.component";
import { App1414838430459303Component } from "./components/app-1414838430459303/app-1414838430459303.component";
import { App5368040776211747Component } from "./components/app-5368040776211747/app-5368040776211747.component";
import { App9003217078791167Component } from "./components/app-9003217078791167/app-9003217078791167.component";
import { App7606380367661405Component } from "./components/app-7606380367661405/app-7606380367661405.component";

// @ts-ignore
import html from './app-8400562137755181.component.html?raw';
// @ts-ignore
import style from './app-8400562137755181.component.scss?inline';

/**
 * COMPONENT: 'app-8400562137755181'
 */

export const App8400562137755181Component = new Component({
  name: 'app-8400562137755181',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2209409053848129Component,
App1414838430459303Component,
App5368040776211747Component,
App9003217078791167Component,
App7606380367661405Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
