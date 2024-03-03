import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3612357791338665Component } from "./components/app-3612357791338665/app-3612357791338665.component";
import { App8567883282907185Component } from "./components/app-8567883282907185/app-8567883282907185.component";
import { App1975772655111901Component } from "./components/app-1975772655111901/app-1975772655111901.component";
import { App1712546247739473Component } from "./components/app-1712546247739473/app-1712546247739473.component";
import { App2528000903256989Component } from "./components/app-2528000903256989/app-2528000903256989.component";

// @ts-ignore
import html from './app-4892915061486929.component.html?raw';
// @ts-ignore
import style from './app-4892915061486929.component.scss?inline';

/**
 * COMPONENT: 'app-4892915061486929'
 */

export const App4892915061486929Component = new Component({
  name: 'app-4892915061486929',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3612357791338665Component,
App8567883282907185Component,
App1975772655111901Component,
App1712546247739473Component,
App2528000903256989Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
