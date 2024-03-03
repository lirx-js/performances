import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1613245286469065Component } from "./components/app-1613245286469065/app-1613245286469065.component";
import { App5031694967060071Component } from "./components/app-5031694967060071/app-5031694967060071.component";
import { App2710633530487275Component } from "./components/app-2710633530487275/app-2710633530487275.component";
import { App1067488690000823Component } from "./components/app-1067488690000823/app-1067488690000823.component";
import { App8862741958651021Component } from "./components/app-8862741958651021/app-8862741958651021.component";

// @ts-ignore
import html from './app-6698096962145549.component.html?raw';
// @ts-ignore
import style from './app-6698096962145549.component.scss?inline';

/**
 * COMPONENT: 'app-6698096962145549'
 */

export const App6698096962145549Component = new Component({
  name: 'app-6698096962145549',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1613245286469065Component,
App5031694967060071Component,
App2710633530487275Component,
App1067488690000823Component,
App8862741958651021Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
