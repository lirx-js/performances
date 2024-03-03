import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5030110132582661Component } from "./components/app-5030110132582661/app-5030110132582661.component";
import { App4001514382968797Component } from "./components/app-4001514382968797/app-4001514382968797.component";
import { App91766262199751Component } from "./components/app-91766262199751/app-91766262199751.component";
import { App565766794333307Component } from "./components/app-565766794333307/app-565766794333307.component";
import { App3833816114159007Component } from "./components/app-3833816114159007/app-3833816114159007.component";

// @ts-ignore
import html from './app-2893565832792655.component.html?raw';
// @ts-ignore
import style from './app-2893565832792655.component.scss?inline';

/**
 * COMPONENT: 'app-2893565832792655'
 */

export const App2893565832792655Component = new Component({
  name: 'app-2893565832792655',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5030110132582661Component,
App4001514382968797Component,
App91766262199751Component,
App565766794333307Component,
App3833816114159007Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
