import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App50426069496099Component } from "./components/app-50426069496099/app-50426069496099.component";
import { App2647574425472307Component } from "./components/app-2647574425472307/app-2647574425472307.component";
import { App3785131197285825Component } from "./components/app-3785131197285825/app-3785131197285825.component";
import { App8416763455009037Component } from "./components/app-8416763455009037/app-8416763455009037.component";
import { App7325536303325125Component } from "./components/app-7325536303325125/app-7325536303325125.component";

// @ts-ignore
import html from './app-5586514141908213.component.html?raw';
// @ts-ignore
import style from './app-5586514141908213.component.scss?inline';

/**
 * COMPONENT: 'app-5586514141908213'
 */

export const App5586514141908213Component = new Component({
  name: 'app-5586514141908213',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App50426069496099Component,
App2647574425472307Component,
App3785131197285825Component,
App8416763455009037Component,
App7325536303325125Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
