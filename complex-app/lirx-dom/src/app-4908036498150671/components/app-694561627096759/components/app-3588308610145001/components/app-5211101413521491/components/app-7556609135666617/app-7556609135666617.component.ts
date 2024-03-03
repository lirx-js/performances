import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6458358492492403Component } from "./components/app-6458358492492403/app-6458358492492403.component";
import { App486588037979843Component } from "./components/app-486588037979843/app-486588037979843.component";
import { App2426452505727235Component } from "./components/app-2426452505727235/app-2426452505727235.component";
import { App5868513323017117Component } from "./components/app-5868513323017117/app-5868513323017117.component";
import { App2190133596044201Component } from "./components/app-2190133596044201/app-2190133596044201.component";

// @ts-ignore
import html from './app-7556609135666617.component.html?raw';
// @ts-ignore
import style from './app-7556609135666617.component.scss?inline';

/**
 * COMPONENT: 'app-7556609135666617'
 */

export const App7556609135666617Component = new Component({
  name: 'app-7556609135666617',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6458358492492403Component,
App486588037979843Component,
App2426452505727235Component,
App5868513323017117Component,
App2190133596044201Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
