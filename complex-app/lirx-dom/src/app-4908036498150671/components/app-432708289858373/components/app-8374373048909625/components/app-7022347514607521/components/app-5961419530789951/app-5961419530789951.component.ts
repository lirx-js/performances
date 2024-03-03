import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8998753041162591Component } from "./components/app-8998753041162591/app-8998753041162591.component";
import { App4443100889652839Component } from "./components/app-4443100889652839/app-4443100889652839.component";
import { App7885192071369341Component } from "./components/app-7885192071369341/app-7885192071369341.component";
import { App6735207865366255Component } from "./components/app-6735207865366255/app-6735207865366255.component";
import { App3763713352039773Component } from "./components/app-3763713352039773/app-3763713352039773.component";

// @ts-ignore
import html from './app-5961419530789951.component.html?raw';
// @ts-ignore
import style from './app-5961419530789951.component.scss?inline';

/**
 * COMPONENT: 'app-5961419530789951'
 */

export const App5961419530789951Component = new Component({
  name: 'app-5961419530789951',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8998753041162591Component,
App4443100889652839Component,
App7885192071369341Component,
App6735207865366255Component,
App3763713352039773Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
