import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1210145025466419Component } from "./components/app-1210145025466419/app-1210145025466419.component";
import { App1591553774149301Component } from "./components/app-1591553774149301/app-1591553774149301.component";
import { App5128840156772075Component } from "./components/app-5128840156772075/app-5128840156772075.component";
import { App1986070743021919Component } from "./components/app-1986070743021919/app-1986070743021919.component";
import { App8237425434965271Component } from "./components/app-8237425434965271/app-8237425434965271.component";

// @ts-ignore
import html from './app-8804607696702025.component.html?raw';
// @ts-ignore
import style from './app-8804607696702025.component.scss?inline';

/**
 * COMPONENT: 'app-8804607696702025'
 */

export const App8804607696702025Component = new Component({
  name: 'app-8804607696702025',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1210145025466419Component,
App1591553774149301Component,
App5128840156772075Component,
App1986070743021919Component,
App8237425434965271Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
