import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App757690438346363Component } from "./components/app-757690438346363/app-757690438346363.component";
import { App6701939011089121Component } from "./components/app-6701939011089121/app-6701939011089121.component";
import { App5441370509878393Component } from "./components/app-5441370509878393/app-5441370509878393.component";
import { App6268386216324683Component } from "./components/app-6268386216324683/app-6268386216324683.component";
import { App3614889617431661Component } from "./components/app-3614889617431661/app-3614889617431661.component";

// @ts-ignore
import html from './app-6326101858437167.component.html?raw';
// @ts-ignore
import style from './app-6326101858437167.component.scss?inline';

/**
 * COMPONENT: 'app-6326101858437167'
 */

export const App6326101858437167Component = new Component({
  name: 'app-6326101858437167',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App757690438346363Component,
App6701939011089121Component,
App5441370509878393Component,
App6268386216324683Component,
App3614889617431661Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
