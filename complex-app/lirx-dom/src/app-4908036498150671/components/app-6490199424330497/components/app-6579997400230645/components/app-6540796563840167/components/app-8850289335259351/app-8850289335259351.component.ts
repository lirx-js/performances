import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3972176019613305Component } from "./components/app-3972176019613305/app-3972176019613305.component";
import { App1078024534701733Component } from "./components/app-1078024534701733/app-1078024534701733.component";
import { App2002219627690799Component } from "./components/app-2002219627690799/app-2002219627690799.component";
import { App8500696814208959Component } from "./components/app-8500696814208959/app-8500696814208959.component";
import { App2726963340697889Component } from "./components/app-2726963340697889/app-2726963340697889.component";

// @ts-ignore
import html from './app-8850289335259351.component.html?raw';
// @ts-ignore
import style from './app-8850289335259351.component.scss?inline';

/**
 * COMPONENT: 'app-8850289335259351'
 */

export const App8850289335259351Component = new Component({
  name: 'app-8850289335259351',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3972176019613305Component,
App1078024534701733Component,
App2002219627690799Component,
App8500696814208959Component,
App2726963340697889Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
