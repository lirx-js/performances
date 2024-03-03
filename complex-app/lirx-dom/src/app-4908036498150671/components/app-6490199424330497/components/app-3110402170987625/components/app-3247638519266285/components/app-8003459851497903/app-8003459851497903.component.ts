import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App213464738573733Component } from "./components/app-213464738573733/app-213464738573733.component";
import { App4494167454823495Component } from "./components/app-4494167454823495/app-4494167454823495.component";
import { App1490385142311955Component } from "./components/app-1490385142311955/app-1490385142311955.component";
import { App7903467508101375Component } from "./components/app-7903467508101375/app-7903467508101375.component";
import { App808198877523915Component } from "./components/app-808198877523915/app-808198877523915.component";

// @ts-ignore
import html from './app-8003459851497903.component.html?raw';
// @ts-ignore
import style from './app-8003459851497903.component.scss?inline';

/**
 * COMPONENT: 'app-8003459851497903'
 */

export const App8003459851497903Component = new Component({
  name: 'app-8003459851497903',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App213464738573733Component,
App4494167454823495Component,
App1490385142311955Component,
App7903467508101375Component,
App808198877523915Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
