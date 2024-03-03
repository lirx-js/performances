import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4049296725929655Component } from "./components/app-4049296725929655/app-4049296725929655.component";
import { App7777577409397819Component } from "./components/app-7777577409397819/app-7777577409397819.component";
import { App5487541535820653Component } from "./components/app-5487541535820653/app-5487541535820653.component";
import { App8298322207024127Component } from "./components/app-8298322207024127/app-8298322207024127.component";
import { App4409500351055687Component } from "./components/app-4409500351055687/app-4409500351055687.component";

// @ts-ignore
import html from './app-8363986817320125.component.html?raw';
// @ts-ignore
import style from './app-8363986817320125.component.scss?inline';

/**
 * COMPONENT: 'app-8363986817320125'
 */

export const App8363986817320125Component = new Component({
  name: 'app-8363986817320125',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4049296725929655Component,
App7777577409397819Component,
App5487541535820653Component,
App8298322207024127Component,
App4409500351055687Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
