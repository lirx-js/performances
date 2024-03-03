import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4859034267801093Component } from "./components/app-4859034267801093/app-4859034267801093.component";
import { App6416893934001457Component } from "./components/app-6416893934001457/app-6416893934001457.component";
import { App2018510807720999Component } from "./components/app-2018510807720999/app-2018510807720999.component";
import { App2885348312087977Component } from "./components/app-2885348312087977/app-2885348312087977.component";
import { App1168802647231005Component } from "./components/app-1168802647231005/app-1168802647231005.component";

// @ts-ignore
import html from './app-616562892280655.component.html?raw';
// @ts-ignore
import style from './app-616562892280655.component.scss?inline';

/**
 * COMPONENT: 'app-616562892280655'
 */

export const App616562892280655Component = new Component({
  name: 'app-616562892280655',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4859034267801093Component,
App6416893934001457Component,
App2018510807720999Component,
App2885348312087977Component,
App1168802647231005Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
