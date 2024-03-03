import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3621542251801559Component } from "./components/app-3621542251801559/app-3621542251801559.component";
import { App7632884817660729Component } from "./components/app-7632884817660729/app-7632884817660729.component";
import { App7409612536002693Component } from "./components/app-7409612536002693/app-7409612536002693.component";
import { App757086904057855Component } from "./components/app-757086904057855/app-757086904057855.component";
import { App2415183069579801Component } from "./components/app-2415183069579801/app-2415183069579801.component";

// @ts-ignore
import html from './app-2768915566473669.component.html?raw';
// @ts-ignore
import style from './app-2768915566473669.component.scss?inline';

/**
 * COMPONENT: 'app-2768915566473669'
 */

export const App2768915566473669Component = new Component({
  name: 'app-2768915566473669',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3621542251801559Component,
App7632884817660729Component,
App7409612536002693Component,
App757086904057855Component,
App2415183069579801Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
