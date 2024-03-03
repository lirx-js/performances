import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6537231093520113Component } from "./components/app-6537231093520113/app-6537231093520113.component";
import { App6152863936865381Component } from "./components/app-6152863936865381/app-6152863936865381.component";
import { App5242648080451919Component } from "./components/app-5242648080451919/app-5242648080451919.component";
import { App2164943790385465Component } from "./components/app-2164943790385465/app-2164943790385465.component";
import { App674142074962955Component } from "./components/app-674142074962955/app-674142074962955.component";

// @ts-ignore
import html from './app-75958449315099.component.html?raw';
// @ts-ignore
import style from './app-75958449315099.component.scss?inline';

/**
 * COMPONENT: 'app-75958449315099'
 */

export const App75958449315099Component = new Component({
  name: 'app-75958449315099',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6537231093520113Component,
App6152863936865381Component,
App5242648080451919Component,
App2164943790385465Component,
App674142074962955Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
