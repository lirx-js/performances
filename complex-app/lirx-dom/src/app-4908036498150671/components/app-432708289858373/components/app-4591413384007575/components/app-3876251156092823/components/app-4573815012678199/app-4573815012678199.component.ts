import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4776165100209915Component } from "./components/app-4776165100209915/app-4776165100209915.component";
import { App5460001457691687Component } from "./components/app-5460001457691687/app-5460001457691687.component";
import { App910330151798373Component } from "./components/app-910330151798373/app-910330151798373.component";
import { App4880173804593813Component } from "./components/app-4880173804593813/app-4880173804593813.component";
import { App3409612348916633Component } from "./components/app-3409612348916633/app-3409612348916633.component";

// @ts-ignore
import html from './app-4573815012678199.component.html?raw';
// @ts-ignore
import style from './app-4573815012678199.component.scss?inline';

/**
 * COMPONENT: 'app-4573815012678199'
 */

export const App4573815012678199Component = new Component({
  name: 'app-4573815012678199',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4776165100209915Component,
App5460001457691687Component,
App910330151798373Component,
App4880173804593813Component,
App3409612348916633Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
