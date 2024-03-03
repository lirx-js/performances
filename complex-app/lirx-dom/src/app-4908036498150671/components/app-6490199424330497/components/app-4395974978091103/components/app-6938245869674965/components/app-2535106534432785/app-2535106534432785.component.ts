import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1383667378896269Component } from "./components/app-1383667378896269/app-1383667378896269.component";
import { App8667917881270407Component } from "./components/app-8667917881270407/app-8667917881270407.component";
import { App1160552717822925Component } from "./components/app-1160552717822925/app-1160552717822925.component";
import { App7153202658693867Component } from "./components/app-7153202658693867/app-7153202658693867.component";
import { App5960327186696491Component } from "./components/app-5960327186696491/app-5960327186696491.component";

// @ts-ignore
import html from './app-2535106534432785.component.html?raw';
// @ts-ignore
import style from './app-2535106534432785.component.scss?inline';

/**
 * COMPONENT: 'app-2535106534432785'
 */

export const App2535106534432785Component = new Component({
  name: 'app-2535106534432785',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1383667378896269Component,
App8667917881270407Component,
App1160552717822925Component,
App7153202658693867Component,
App5960327186696491Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
