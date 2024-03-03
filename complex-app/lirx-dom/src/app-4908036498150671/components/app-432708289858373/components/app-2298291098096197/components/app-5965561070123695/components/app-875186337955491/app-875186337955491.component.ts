import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2939322601482421Component } from "./components/app-2939322601482421/app-2939322601482421.component";
import { App6111115586660421Component } from "./components/app-6111115586660421/app-6111115586660421.component";
import { App5603376878252335Component } from "./components/app-5603376878252335/app-5603376878252335.component";
import { App887930985075455Component } from "./components/app-887930985075455/app-887930985075455.component";
import { App2348842203729031Component } from "./components/app-2348842203729031/app-2348842203729031.component";

// @ts-ignore
import html from './app-875186337955491.component.html?raw';
// @ts-ignore
import style from './app-875186337955491.component.scss?inline';

/**
 * COMPONENT: 'app-875186337955491'
 */

export const App875186337955491Component = new Component({
  name: 'app-875186337955491',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2939322601482421Component,
App6111115586660421Component,
App5603376878252335Component,
App887930985075455Component,
App2348842203729031Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
