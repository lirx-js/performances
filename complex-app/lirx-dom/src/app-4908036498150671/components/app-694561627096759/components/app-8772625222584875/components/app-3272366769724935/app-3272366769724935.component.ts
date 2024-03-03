import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1293941293810047Component } from "./components/app-1293941293810047/app-1293941293810047.component";
import { App6655453994121863Component } from "./components/app-6655453994121863/app-6655453994121863.component";
import { App4073210936038071Component } from "./components/app-4073210936038071/app-4073210936038071.component";
import { App3819206941323663Component } from "./components/app-3819206941323663/app-3819206941323663.component";
import { App1996932822613591Component } from "./components/app-1996932822613591/app-1996932822613591.component";

// @ts-ignore
import html from './app-3272366769724935.component.html?raw';
// @ts-ignore
import style from './app-3272366769724935.component.scss?inline';

/**
 * COMPONENT: 'app-3272366769724935'
 */

export const App3272366769724935Component = new Component({
  name: 'app-3272366769724935',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1293941293810047Component,
App6655453994121863Component,
App4073210936038071Component,
App3819206941323663Component,
App1996932822613591Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
