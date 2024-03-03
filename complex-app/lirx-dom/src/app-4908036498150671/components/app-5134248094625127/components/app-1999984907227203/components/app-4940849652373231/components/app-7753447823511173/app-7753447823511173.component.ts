import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4613696759515671Component } from "./components/app-4613696759515671/app-4613696759515671.component";
import { App6457597049533587Component } from "./components/app-6457597049533587/app-6457597049533587.component";
import { App2398469123785641Component } from "./components/app-2398469123785641/app-2398469123785641.component";
import { App3413935900946803Component } from "./components/app-3413935900946803/app-3413935900946803.component";
import { App195395379022657Component } from "./components/app-195395379022657/app-195395379022657.component";

// @ts-ignore
import html from './app-7753447823511173.component.html?raw';
// @ts-ignore
import style from './app-7753447823511173.component.scss?inline';

/**
 * COMPONENT: 'app-7753447823511173'
 */

export const App7753447823511173Component = new Component({
  name: 'app-7753447823511173',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4613696759515671Component,
App6457597049533587Component,
App2398469123785641Component,
App3413935900946803Component,
App195395379022657Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
