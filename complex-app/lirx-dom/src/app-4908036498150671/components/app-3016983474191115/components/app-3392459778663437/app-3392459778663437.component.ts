import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4195078681906685Component } from "./components/app-4195078681906685/app-4195078681906685.component";
import { App307110093859241Component } from "./components/app-307110093859241/app-307110093859241.component";
import { App3246468662019681Component } from "./components/app-3246468662019681/app-3246468662019681.component";
import { App2695628176609773Component } from "./components/app-2695628176609773/app-2695628176609773.component";
import { App164162394955883Component } from "./components/app-164162394955883/app-164162394955883.component";

// @ts-ignore
import html from './app-3392459778663437.component.html?raw';
// @ts-ignore
import style from './app-3392459778663437.component.scss?inline';

/**
 * COMPONENT: 'app-3392459778663437'
 */

export const App3392459778663437Component = new Component({
  name: 'app-3392459778663437',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4195078681906685Component,
App307110093859241Component,
App3246468662019681Component,
App2695628176609773Component,
App164162394955883Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
