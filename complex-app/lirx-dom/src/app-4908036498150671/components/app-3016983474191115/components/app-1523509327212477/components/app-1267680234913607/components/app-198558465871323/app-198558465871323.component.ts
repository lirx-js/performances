import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4009840457751809Component } from "./components/app-4009840457751809/app-4009840457751809.component";
import { App3991743700142473Component } from "./components/app-3991743700142473/app-3991743700142473.component";
import { App4128894289920469Component } from "./components/app-4128894289920469/app-4128894289920469.component";
import { App4152309362432897Component } from "./components/app-4152309362432897/app-4152309362432897.component";
import { App4926830600958375Component } from "./components/app-4926830600958375/app-4926830600958375.component";

// @ts-ignore
import html from './app-198558465871323.component.html?raw';
// @ts-ignore
import style from './app-198558465871323.component.scss?inline';

/**
 * COMPONENT: 'app-198558465871323'
 */

export const App198558465871323Component = new Component({
  name: 'app-198558465871323',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4009840457751809Component,
App3991743700142473Component,
App4128894289920469Component,
App4152309362432897Component,
App4926830600958375Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
