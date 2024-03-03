import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1869122633876155Component } from "./components/app-1869122633876155/app-1869122633876155.component";
import { App2028719849496281Component } from "./components/app-2028719849496281/app-2028719849496281.component";
import { App5259780804489117Component } from "./components/app-5259780804489117/app-5259780804489117.component";
import { App3701253321907189Component } from "./components/app-3701253321907189/app-3701253321907189.component";
import { App2706252117921143Component } from "./components/app-2706252117921143/app-2706252117921143.component";

// @ts-ignore
import html from './app-5466551350478107.component.html?raw';
// @ts-ignore
import style from './app-5466551350478107.component.scss?inline';

/**
 * COMPONENT: 'app-5466551350478107'
 */

export const App5466551350478107Component = new Component({
  name: 'app-5466551350478107',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1869122633876155Component,
App2028719849496281Component,
App5259780804489117Component,
App3701253321907189Component,
App2706252117921143Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
