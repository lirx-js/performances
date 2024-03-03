import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7090853795462599Component } from "./components/app-7090853795462599/app-7090853795462599.component";
import { App6853792541873015Component } from "./components/app-6853792541873015/app-6853792541873015.component";
import { App69097478781087Component } from "./components/app-69097478781087/app-69097478781087.component";
import { App5802917864153993Component } from "./components/app-5802917864153993/app-5802917864153993.component";
import { App4924205971522183Component } from "./components/app-4924205971522183/app-4924205971522183.component";

// @ts-ignore
import html from './app-2542357877527149.component.html?raw';
// @ts-ignore
import style from './app-2542357877527149.component.scss?inline';

/**
 * COMPONENT: 'app-2542357877527149'
 */

export const App2542357877527149Component = new Component({
  name: 'app-2542357877527149',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7090853795462599Component,
App6853792541873015Component,
App69097478781087Component,
App5802917864153993Component,
App4924205971522183Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
