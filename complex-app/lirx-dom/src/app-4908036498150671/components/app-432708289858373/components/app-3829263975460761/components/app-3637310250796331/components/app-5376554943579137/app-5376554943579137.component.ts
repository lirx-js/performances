import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App16101831772653Component } from "./components/app-16101831772653/app-16101831772653.component";
import { App7201935732146491Component } from "./components/app-7201935732146491/app-7201935732146491.component";
import { App4804663162621793Component } from "./components/app-4804663162621793/app-4804663162621793.component";
import { App1678568159632305Component } from "./components/app-1678568159632305/app-1678568159632305.component";
import { App7856441656095181Component } from "./components/app-7856441656095181/app-7856441656095181.component";

// @ts-ignore
import html from './app-5376554943579137.component.html?raw';
// @ts-ignore
import style from './app-5376554943579137.component.scss?inline';

/**
 * COMPONENT: 'app-5376554943579137'
 */

export const App5376554943579137Component = new Component({
  name: 'app-5376554943579137',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App16101831772653Component,
App7201935732146491Component,
App4804663162621793Component,
App1678568159632305Component,
App7856441656095181Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
