import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2128694800704945Component } from "./components/app-2128694800704945/app-2128694800704945.component";
import { App4165162110369989Component } from "./components/app-4165162110369989/app-4165162110369989.component";
import { App3525940713217869Component } from "./components/app-3525940713217869/app-3525940713217869.component";
import { App2881878242614713Component } from "./components/app-2881878242614713/app-2881878242614713.component";
import { App2219896841847691Component } from "./components/app-2219896841847691/app-2219896841847691.component";

// @ts-ignore
import html from './app-7140877133579961.component.html?raw';
// @ts-ignore
import style from './app-7140877133579961.component.scss?inline';

/**
 * COMPONENT: 'app-7140877133579961'
 */

export const App7140877133579961Component = new Component({
  name: 'app-7140877133579961',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2128694800704945Component,
App4165162110369989Component,
App3525940713217869Component,
App2881878242614713Component,
App2219896841847691Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
