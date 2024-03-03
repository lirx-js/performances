import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2171974981551415Component } from "./components/app-2171974981551415/app-2171974981551415.component";
import { App7375901143195533Component } from "./components/app-7375901143195533/app-7375901143195533.component";
import { App6368747531456917Component } from "./components/app-6368747531456917/app-6368747531456917.component";
import { App5698590279573709Component } from "./components/app-5698590279573709/app-5698590279573709.component";
import { App4186500455608937Component } from "./components/app-4186500455608937/app-4186500455608937.component";

// @ts-ignore
import html from './app-7397310826342247.component.html?raw';
// @ts-ignore
import style from './app-7397310826342247.component.scss?inline';

/**
 * COMPONENT: 'app-7397310826342247'
 */

export const App7397310826342247Component = new Component({
  name: 'app-7397310826342247',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2171974981551415Component,
App7375901143195533Component,
App6368747531456917Component,
App5698590279573709Component,
App4186500455608937Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
