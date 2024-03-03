import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4765465318515675Component } from "./components/app-4765465318515675/app-4765465318515675.component";
import { App8593159816391187Component } from "./components/app-8593159816391187/app-8593159816391187.component";
import { App5026228543566263Component } from "./components/app-5026228543566263/app-5026228543566263.component";
import { App8676943781828347Component } from "./components/app-8676943781828347/app-8676943781828347.component";
import { App3918152862726161Component } from "./components/app-3918152862726161/app-3918152862726161.component";

// @ts-ignore
import html from './app-2340260445713345.component.html?raw';
// @ts-ignore
import style from './app-2340260445713345.component.scss?inline';

/**
 * COMPONENT: 'app-2340260445713345'
 */

export const App2340260445713345Component = new Component({
  name: 'app-2340260445713345',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4765465318515675Component,
App8593159816391187Component,
App5026228543566263Component,
App8676943781828347Component,
App3918152862726161Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
