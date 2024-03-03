import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App367408844646237Component } from "./components/app-367408844646237/app-367408844646237.component";
import { App8607476870154497Component } from "./components/app-8607476870154497/app-8607476870154497.component";
import { App997131294958195Component } from "./components/app-997131294958195/app-997131294958195.component";
import { App2705331868518653Component } from "./components/app-2705331868518653/app-2705331868518653.component";
import { App6697226184890821Component } from "./components/app-6697226184890821/app-6697226184890821.component";

// @ts-ignore
import html from './app-4357776694600717.component.html?raw';
// @ts-ignore
import style from './app-4357776694600717.component.scss?inline';

/**
 * COMPONENT: 'app-4357776694600717'
 */

export const App4357776694600717Component = new Component({
  name: 'app-4357776694600717',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App367408844646237Component,
App8607476870154497Component,
App997131294958195Component,
App2705331868518653Component,
App6697226184890821Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
