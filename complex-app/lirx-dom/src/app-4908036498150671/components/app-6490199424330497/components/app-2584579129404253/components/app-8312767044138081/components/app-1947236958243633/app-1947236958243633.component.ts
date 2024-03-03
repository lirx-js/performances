import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4142269459600775Component } from "./components/app-4142269459600775/app-4142269459600775.component";
import { App5284046543464935Component } from "./components/app-5284046543464935/app-5284046543464935.component";
import { App4971457322301983Component } from "./components/app-4971457322301983/app-4971457322301983.component";
import { App9002953564282185Component } from "./components/app-9002953564282185/app-9002953564282185.component";
import { App5568596817901671Component } from "./components/app-5568596817901671/app-5568596817901671.component";

// @ts-ignore
import html from './app-1947236958243633.component.html?raw';
// @ts-ignore
import style from './app-1947236958243633.component.scss?inline';

/**
 * COMPONENT: 'app-1947236958243633'
 */

export const App1947236958243633Component = new Component({
  name: 'app-1947236958243633',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4142269459600775Component,
App5284046543464935Component,
App4971457322301983Component,
App9002953564282185Component,
App5568596817901671Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
