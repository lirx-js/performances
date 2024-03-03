import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8077633403743159Component } from "./components/app-8077633403743159/app-8077633403743159.component";
import { App3208932418855417Component } from "./components/app-3208932418855417/app-3208932418855417.component";
import { App4649266909856509Component } from "./components/app-4649266909856509/app-4649266909856509.component";
import { App8793296088270459Component } from "./components/app-8793296088270459/app-8793296088270459.component";
import { App2072626961319833Component } from "./components/app-2072626961319833/app-2072626961319833.component";

// @ts-ignore
import html from './app-4964875557111439.component.html?raw';
// @ts-ignore
import style from './app-4964875557111439.component.scss?inline';

/**
 * COMPONENT: 'app-4964875557111439'
 */

export const App4964875557111439Component = new Component({
  name: 'app-4964875557111439',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8077633403743159Component,
App3208932418855417Component,
App4649266909856509Component,
App8793296088270459Component,
App2072626961319833Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
