import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5376554943579137Component } from "./components/app-5376554943579137/app-5376554943579137.component";
import { App8571653077869977Component } from "./components/app-8571653077869977/app-8571653077869977.component";
import { App7712815005528465Component } from "./components/app-7712815005528465/app-7712815005528465.component";
import { App2946949651829581Component } from "./components/app-2946949651829581/app-2946949651829581.component";
import { App6910275698343059Component } from "./components/app-6910275698343059/app-6910275698343059.component";

// @ts-ignore
import html from './app-3637310250796331.component.html?raw';
// @ts-ignore
import style from './app-3637310250796331.component.scss?inline';

/**
 * COMPONENT: 'app-3637310250796331'
 */

export const App3637310250796331Component = new Component({
  name: 'app-3637310250796331',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5376554943579137Component,
App8571653077869977Component,
App7712815005528465Component,
App2946949651829581Component,
App6910275698343059Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
