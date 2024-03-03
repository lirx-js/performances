import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6514007482283243Component } from "./components/app-6514007482283243/app-6514007482283243.component";
import { App6675050230671933Component } from "./components/app-6675050230671933/app-6675050230671933.component";
import { App4821038024369587Component } from "./components/app-4821038024369587/app-4821038024369587.component";
import { App7783378397518519Component } from "./components/app-7783378397518519/app-7783378397518519.component";
import { App7919618470314343Component } from "./components/app-7919618470314343/app-7919618470314343.component";

// @ts-ignore
import html from './app-6035008839265343.component.html?raw';
// @ts-ignore
import style from './app-6035008839265343.component.scss?inline';

/**
 * COMPONENT: 'app-6035008839265343'
 */

export const App6035008839265343Component = new Component({
  name: 'app-6035008839265343',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6514007482283243Component,
App6675050230671933Component,
App4821038024369587Component,
App7783378397518519Component,
App7919618470314343Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
