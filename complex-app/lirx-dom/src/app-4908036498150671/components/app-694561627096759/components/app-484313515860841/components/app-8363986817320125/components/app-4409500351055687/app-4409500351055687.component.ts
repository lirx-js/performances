import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4609507392738355Component } from "./components/app-4609507392738355/app-4609507392738355.component";
import { App503693296294145Component } from "./components/app-503693296294145/app-503693296294145.component";
import { App4243197864891915Component } from "./components/app-4243197864891915/app-4243197864891915.component";
import { App6795632244900485Component } from "./components/app-6795632244900485/app-6795632244900485.component";
import { App4114086683219963Component } from "./components/app-4114086683219963/app-4114086683219963.component";

// @ts-ignore
import html from './app-4409500351055687.component.html?raw';
// @ts-ignore
import style from './app-4409500351055687.component.scss?inline';

/**
 * COMPONENT: 'app-4409500351055687'
 */

export const App4409500351055687Component = new Component({
  name: 'app-4409500351055687',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4609507392738355Component,
App503693296294145Component,
App4243197864891915Component,
App6795632244900485Component,
App4114086683219963Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
