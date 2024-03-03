import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3645766048339357Component } from "./components/app-3645766048339357/app-3645766048339357.component";
import { App1702929416833021Component } from "./components/app-1702929416833021/app-1702929416833021.component";
import { App762752110262923Component } from "./components/app-762752110262923/app-762752110262923.component";
import { App810749378188875Component } from "./components/app-810749378188875/app-810749378188875.component";
import { App700042160672867Component } from "./components/app-700042160672867/app-700042160672867.component";

// @ts-ignore
import html from './app-7183012551753055.component.html?raw';
// @ts-ignore
import style from './app-7183012551753055.component.scss?inline';

/**
 * COMPONENT: 'app-7183012551753055'
 */

export const App7183012551753055Component = new Component({
  name: 'app-7183012551753055',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3645766048339357Component,
App1702929416833021Component,
App762752110262923Component,
App810749378188875Component,
App700042160672867Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
