import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2921818340401201Component } from "./components/app-2921818340401201/app-2921818340401201.component";
import { App983111939903643Component } from "./components/app-983111939903643/app-983111939903643.component";
import { App5516535268116845Component } from "./components/app-5516535268116845/app-5516535268116845.component";
import { App5994167144121015Component } from "./components/app-5994167144121015/app-5994167144121015.component";
import { App2436297061451931Component } from "./components/app-2436297061451931/app-2436297061451931.component";

// @ts-ignore
import html from './app-1098063186277647.component.html?raw';
// @ts-ignore
import style from './app-1098063186277647.component.scss?inline';

/**
 * COMPONENT: 'app-1098063186277647'
 */

export const App1098063186277647Component = new Component({
  name: 'app-1098063186277647',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2921818340401201Component,
App983111939903643Component,
App5516535268116845Component,
App5994167144121015Component,
App2436297061451931Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
