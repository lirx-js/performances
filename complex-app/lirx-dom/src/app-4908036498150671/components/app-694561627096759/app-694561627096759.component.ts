import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App961035991564981Component } from "./components/app-961035991564981/app-961035991564981.component";
import { App484313515860841Component } from "./components/app-484313515860841/app-484313515860841.component";
import { App3588308610145001Component } from "./components/app-3588308610145001/app-3588308610145001.component";
import { App1444934131086645Component } from "./components/app-1444934131086645/app-1444934131086645.component";
import { App8772625222584875Component } from "./components/app-8772625222584875/app-8772625222584875.component";

// @ts-ignore
import html from './app-694561627096759.component.html?raw';
// @ts-ignore
import style from './app-694561627096759.component.scss?inline';

/**
 * COMPONENT: 'app-694561627096759'
 */

export const App694561627096759Component = new Component({
  name: 'app-694561627096759',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App961035991564981Component,
App484313515860841Component,
App3588308610145001Component,
App1444934131086645Component,
App8772625222584875Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
