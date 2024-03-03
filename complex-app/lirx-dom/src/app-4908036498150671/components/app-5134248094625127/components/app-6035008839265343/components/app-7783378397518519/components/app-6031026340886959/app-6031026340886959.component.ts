import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App634471168529643Component } from "./components/app-634471168529643/app-634471168529643.component";
import { App3833036942872593Component } from "./components/app-3833036942872593/app-3833036942872593.component";
import { App4672404702714469Component } from "./components/app-4672404702714469/app-4672404702714469.component";
import { App3003929912102341Component } from "./components/app-3003929912102341/app-3003929912102341.component";
import { App3958162008101057Component } from "./components/app-3958162008101057/app-3958162008101057.component";

// @ts-ignore
import html from './app-6031026340886959.component.html?raw';
// @ts-ignore
import style from './app-6031026340886959.component.scss?inline';

/**
 * COMPONENT: 'app-6031026340886959'
 */

export const App6031026340886959Component = new Component({
  name: 'app-6031026340886959',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App634471168529643Component,
App3833036942872593Component,
App4672404702714469Component,
App3003929912102341Component,
App3958162008101057Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
