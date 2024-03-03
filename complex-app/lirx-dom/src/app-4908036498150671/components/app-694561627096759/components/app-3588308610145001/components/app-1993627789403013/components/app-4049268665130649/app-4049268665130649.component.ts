import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1868202647202019Component } from "./components/app-1868202647202019/app-1868202647202019.component";
import { App2696423462888135Component } from "./components/app-2696423462888135/app-2696423462888135.component";
import { App2969471861360261Component } from "./components/app-2969471861360261/app-2969471861360261.component";
import { App4963158535068099Component } from "./components/app-4963158535068099/app-4963158535068099.component";
import { App7360425076591867Component } from "./components/app-7360425076591867/app-7360425076591867.component";

// @ts-ignore
import html from './app-4049268665130649.component.html?raw';
// @ts-ignore
import style from './app-4049268665130649.component.scss?inline';

/**
 * COMPONENT: 'app-4049268665130649'
 */

export const App4049268665130649Component = new Component({
  name: 'app-4049268665130649',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1868202647202019Component,
App2696423462888135Component,
App2969471861360261Component,
App4963158535068099Component,
App7360425076591867Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
