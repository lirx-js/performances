import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App724432847517933Component } from "./components/app-724432847517933/app-724432847517933.component";
import { App7401926756375703Component } from "./components/app-7401926756375703/app-7401926756375703.component";
import { App4185137130576481Component } from "./components/app-4185137130576481/app-4185137130576481.component";
import { App7278577369419203Component } from "./components/app-7278577369419203/app-7278577369419203.component";
import { App8685357285349953Component } from "./components/app-8685357285349953/app-8685357285349953.component";

// @ts-ignore
import html from './app-6655453994121863.component.html?raw';
// @ts-ignore
import style from './app-6655453994121863.component.scss?inline';

/**
 * COMPONENT: 'app-6655453994121863'
 */

export const App6655453994121863Component = new Component({
  name: 'app-6655453994121863',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App724432847517933Component,
App7401926756375703Component,
App4185137130576481Component,
App7278577369419203Component,
App8685357285349953Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
