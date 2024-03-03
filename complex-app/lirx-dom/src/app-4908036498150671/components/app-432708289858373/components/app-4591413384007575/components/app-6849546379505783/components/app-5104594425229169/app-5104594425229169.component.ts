import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App792779531323451Component } from "./components/app-792779531323451/app-792779531323451.component";
import { App4287786103358897Component } from "./components/app-4287786103358897/app-4287786103358897.component";
import { App4938403741404125Component } from "./components/app-4938403741404125/app-4938403741404125.component";
import { App7081973976899367Component } from "./components/app-7081973976899367/app-7081973976899367.component";
import { App8321420390331795Component } from "./components/app-8321420390331795/app-8321420390331795.component";

// @ts-ignore
import html from './app-5104594425229169.component.html?raw';
// @ts-ignore
import style from './app-5104594425229169.component.scss?inline';

/**
 * COMPONENT: 'app-5104594425229169'
 */

export const App5104594425229169Component = new Component({
  name: 'app-5104594425229169',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App792779531323451Component,
App4287786103358897Component,
App4938403741404125Component,
App7081973976899367Component,
App8321420390331795Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
