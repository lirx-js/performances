import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2762132649823063Component } from "./components/app-2762132649823063/app-2762132649823063.component";
import { App3613569546160507Component } from "./components/app-3613569546160507/app-3613569546160507.component";
import { App6031026340886959Component } from "./components/app-6031026340886959/app-6031026340886959.component";
import { App5586514141908213Component } from "./components/app-5586514141908213/app-5586514141908213.component";
import { App6782375055983837Component } from "./components/app-6782375055983837/app-6782375055983837.component";

// @ts-ignore
import html from './app-7783378397518519.component.html?raw';
// @ts-ignore
import style from './app-7783378397518519.component.scss?inline';

/**
 * COMPONENT: 'app-7783378397518519'
 */

export const App7783378397518519Component = new Component({
  name: 'app-7783378397518519',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2762132649823063Component,
App3613569546160507Component,
App6031026340886959Component,
App5586514141908213Component,
App6782375055983837Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
