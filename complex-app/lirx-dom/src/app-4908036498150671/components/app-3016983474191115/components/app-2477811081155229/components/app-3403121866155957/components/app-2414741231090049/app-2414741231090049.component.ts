import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7907934242733323Component } from "./components/app-7907934242733323/app-7907934242733323.component";
import { App5399037213986631Component } from "./components/app-5399037213986631/app-5399037213986631.component";
import { App3771328182138621Component } from "./components/app-3771328182138621/app-3771328182138621.component";
import { App6990511541551041Component } from "./components/app-6990511541551041/app-6990511541551041.component";
import { App3661394950207309Component } from "./components/app-3661394950207309/app-3661394950207309.component";

// @ts-ignore
import html from './app-2414741231090049.component.html?raw';
// @ts-ignore
import style from './app-2414741231090049.component.scss?inline';

/**
 * COMPONENT: 'app-2414741231090049'
 */

export const App2414741231090049Component = new Component({
  name: 'app-2414741231090049',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7907934242733323Component,
App5399037213986631Component,
App3771328182138621Component,
App6990511541551041Component,
App3661394950207309Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
