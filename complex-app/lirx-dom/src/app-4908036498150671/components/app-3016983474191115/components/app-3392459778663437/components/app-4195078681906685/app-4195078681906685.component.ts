import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2368996938692681Component } from "./components/app-2368996938692681/app-2368996938692681.component";
import { App1859100422544441Component } from "./components/app-1859100422544441/app-1859100422544441.component";
import { App8440452348897367Component } from "./components/app-8440452348897367/app-8440452348897367.component";
import { App8148616252210005Component } from "./components/app-8148616252210005/app-8148616252210005.component";
import { App6379973270610641Component } from "./components/app-6379973270610641/app-6379973270610641.component";

// @ts-ignore
import html from './app-4195078681906685.component.html?raw';
// @ts-ignore
import style from './app-4195078681906685.component.scss?inline';

/**
 * COMPONENT: 'app-4195078681906685'
 */

export const App4195078681906685Component = new Component({
  name: 'app-4195078681906685',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2368996938692681Component,
App1859100422544441Component,
App8440452348897367Component,
App8148616252210005Component,
App6379973270610641Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
