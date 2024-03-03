import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5005257696396715Component } from "./components/app-5005257696396715/app-5005257696396715.component";
import { App6806684824338045Component } from "./components/app-6806684824338045/app-6806684824338045.component";
import { App3918905463910489Component } from "./components/app-3918905463910489/app-3918905463910489.component";
import { App8999494426612449Component } from "./components/app-8999494426612449/app-8999494426612449.component";
import { App3024604844271039Component } from "./components/app-3024604844271039/app-3024604844271039.component";

// @ts-ignore
import html from './app-4046569998640017.component.html?raw';
// @ts-ignore
import style from './app-4046569998640017.component.scss?inline';

/**
 * COMPONENT: 'app-4046569998640017'
 */

export const App4046569998640017Component = new Component({
  name: 'app-4046569998640017',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5005257696396715Component,
App6806684824338045Component,
App3918905463910489Component,
App8999494426612449Component,
App3024604844271039Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
