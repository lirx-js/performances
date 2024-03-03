import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1670529415435665Component } from "./components/app-1670529415435665/app-1670529415435665.component";
import { App5576733851014725Component } from "./components/app-5576733851014725/app-5576733851014725.component";
import { App7766669276594927Component } from "./components/app-7766669276594927/app-7766669276594927.component";
import { App7997848257523771Component } from "./components/app-7997848257523771/app-7997848257523771.component";
import { App3064779581011871Component } from "./components/app-3064779581011871/app-3064779581011871.component";

// @ts-ignore
import html from './app-5108830280487813.component.html?raw';
// @ts-ignore
import style from './app-5108830280487813.component.scss?inline';

/**
 * COMPONENT: 'app-5108830280487813'
 */

export const App5108830280487813Component = new Component({
  name: 'app-5108830280487813',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1670529415435665Component,
App5576733851014725Component,
App7766669276594927Component,
App7997848257523771Component,
App3064779581011871Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
