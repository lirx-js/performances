import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1400133141787959Component } from "./components/app-1400133141787959/app-1400133141787959.component";
import { App4352341682583573Component } from "./components/app-4352341682583573/app-4352341682583573.component";
import { App8824240789599759Component } from "./components/app-8824240789599759/app-8824240789599759.component";
import { App7723131116434775Component } from "./components/app-7723131116434775/app-7723131116434775.component";
import { App7840207246605475Component } from "./components/app-7840207246605475/app-7840207246605475.component";

// @ts-ignore
import html from './app-2946949651829581.component.html?raw';
// @ts-ignore
import style from './app-2946949651829581.component.scss?inline';

/**
 * COMPONENT: 'app-2946949651829581'
 */

export const App2946949651829581Component = new Component({
  name: 'app-2946949651829581',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1400133141787959Component,
App4352341682583573Component,
App8824240789599759Component,
App7723131116434775Component,
App7840207246605475Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
