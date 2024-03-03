import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8622349222519075Component } from "./components/app-8622349222519075/app-8622349222519075.component";
import { App2312419597402403Component } from "./components/app-2312419597402403/app-2312419597402403.component";
import { App1463256288330023Component } from "./components/app-1463256288330023/app-1463256288330023.component";
import { App2907985162695835Component } from "./components/app-2907985162695835/app-2907985162695835.component";
import { App198754437544589Component } from "./components/app-198754437544589/app-198754437544589.component";

// @ts-ignore
import html from './app-1337781916325361.component.html?raw';
// @ts-ignore
import style from './app-1337781916325361.component.scss?inline';

/**
 * COMPONENT: 'app-1337781916325361'
 */

export const App1337781916325361Component = new Component({
  name: 'app-1337781916325361',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8622349222519075Component,
App2312419597402403Component,
App1463256288330023Component,
App2907985162695835Component,
App198754437544589Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
