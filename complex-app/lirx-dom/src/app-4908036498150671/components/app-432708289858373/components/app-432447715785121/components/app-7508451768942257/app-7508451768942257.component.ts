import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1738019158903361Component } from "./components/app-1738019158903361/app-1738019158903361.component";
import { App6625369886741243Component } from "./components/app-6625369886741243/app-6625369886741243.component";
import { App8182916041939263Component } from "./components/app-8182916041939263/app-8182916041939263.component";
import { App1462152543654789Component } from "./components/app-1462152543654789/app-1462152543654789.component";
import { App8526542821800025Component } from "./components/app-8526542821800025/app-8526542821800025.component";

// @ts-ignore
import html from './app-7508451768942257.component.html?raw';
// @ts-ignore
import style from './app-7508451768942257.component.scss?inline';

/**
 * COMPONENT: 'app-7508451768942257'
 */

export const App7508451768942257Component = new Component({
  name: 'app-7508451768942257',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1738019158903361Component,
App6625369886741243Component,
App8182916041939263Component,
App1462152543654789Component,
App8526542821800025Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
