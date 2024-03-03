import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App634360891299697Component } from "./components/app-634360891299697/app-634360891299697.component";
import { App2820961038834769Component } from "./components/app-2820961038834769/app-2820961038834769.component";
import { App5663048475322149Component } from "./components/app-5663048475322149/app-5663048475322149.component";
import { App4124065740355065Component } from "./components/app-4124065740355065/app-4124065740355065.component";
import { App2802467881948607Component } from "./components/app-2802467881948607/app-2802467881948607.component";

// @ts-ignore
import html from './app-8470450907825527.component.html?raw';
// @ts-ignore
import style from './app-8470450907825527.component.scss?inline';

/**
 * COMPONENT: 'app-8470450907825527'
 */

export const App8470450907825527Component = new Component({
  name: 'app-8470450907825527',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App634360891299697Component,
App2820961038834769Component,
App5663048475322149Component,
App4124065740355065Component,
App2802467881948607Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
