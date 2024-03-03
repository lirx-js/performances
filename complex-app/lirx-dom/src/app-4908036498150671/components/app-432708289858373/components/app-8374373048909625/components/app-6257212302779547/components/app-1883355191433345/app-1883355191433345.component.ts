import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7542338146393217Component } from "./components/app-7542338146393217/app-7542338146393217.component";
import { App4992206306703927Component } from "./components/app-4992206306703927/app-4992206306703927.component";
import { App6877454462461157Component } from "./components/app-6877454462461157/app-6877454462461157.component";
import { App6682556743137115Component } from "./components/app-6682556743137115/app-6682556743137115.component";
import { App4076858175043433Component } from "./components/app-4076858175043433/app-4076858175043433.component";

// @ts-ignore
import html from './app-1883355191433345.component.html?raw';
// @ts-ignore
import style from './app-1883355191433345.component.scss?inline';

/**
 * COMPONENT: 'app-1883355191433345'
 */

export const App1883355191433345Component = new Component({
  name: 'app-1883355191433345',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7542338146393217Component,
App4992206306703927Component,
App6877454462461157Component,
App6682556743137115Component,
App4076858175043433Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
