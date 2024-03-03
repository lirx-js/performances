import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6985731304424795Component } from "./components/app-6985731304424795/app-6985731304424795.component";
import { App4767071831464525Component } from "./components/app-4767071831464525/app-4767071831464525.component";
import { App4082008011346241Component } from "./components/app-4082008011346241/app-4082008011346241.component";
import { App6443858906263581Component } from "./components/app-6443858906263581/app-6443858906263581.component";
import { App8506087380094285Component } from "./components/app-8506087380094285/app-8506087380094285.component";

// @ts-ignore
import html from './app-7793135107207203.component.html?raw';
// @ts-ignore
import style from './app-7793135107207203.component.scss?inline';

/**
 * COMPONENT: 'app-7793135107207203'
 */

export const App7793135107207203Component = new Component({
  name: 'app-7793135107207203',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6985731304424795Component,
App4767071831464525Component,
App4082008011346241Component,
App6443858906263581Component,
App8506087380094285Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
