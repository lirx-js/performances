import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6149175563556623Component } from "./components/app-6149175563556623/app-6149175563556623.component";
import { App6863674806554525Component } from "./components/app-6863674806554525/app-6863674806554525.component";
import { App3343833043030663Component } from "./components/app-3343833043030663/app-3343833043030663.component";
import { App8976504613416713Component } from "./components/app-8976504613416713/app-8976504613416713.component";
import { App3155279443210333Component } from "./components/app-3155279443210333/app-3155279443210333.component";

// @ts-ignore
import html from './app-1376253620784985.component.html?raw';
// @ts-ignore
import style from './app-1376253620784985.component.scss?inline';

/**
 * COMPONENT: 'app-1376253620784985'
 */

export const App1376253620784985Component = new Component({
  name: 'app-1376253620784985',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6149175563556623Component,
App6863674806554525Component,
App3343833043030663Component,
App8976504613416713Component,
App3155279443210333Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
