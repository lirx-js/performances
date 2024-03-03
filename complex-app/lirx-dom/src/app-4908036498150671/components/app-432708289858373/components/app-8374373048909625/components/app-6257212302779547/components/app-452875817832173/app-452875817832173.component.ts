import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6890883435152553Component } from "./components/app-6890883435152553/app-6890883435152553.component";
import { App7764525712030205Component } from "./components/app-7764525712030205/app-7764525712030205.component";
import { App7262810975706275Component } from "./components/app-7262810975706275/app-7262810975706275.component";
import { App1755154639091491Component } from "./components/app-1755154639091491/app-1755154639091491.component";
import { App5195037202434619Component } from "./components/app-5195037202434619/app-5195037202434619.component";

// @ts-ignore
import html from './app-452875817832173.component.html?raw';
// @ts-ignore
import style from './app-452875817832173.component.scss?inline';

/**
 * COMPONENT: 'app-452875817832173'
 */

export const App452875817832173Component = new Component({
  name: 'app-452875817832173',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6890883435152553Component,
App7764525712030205Component,
App7262810975706275Component,
App1755154639091491Component,
App5195037202434619Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
