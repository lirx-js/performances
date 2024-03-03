import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8714301806486781Component } from "./components/app-8714301806486781/app-8714301806486781.component";
import { App6094723348041783Component } from "./components/app-6094723348041783/app-6094723348041783.component";
import { App3436685976028289Component } from "./components/app-3436685976028289/app-3436685976028289.component";
import { App5000370856325519Component } from "./components/app-5000370856325519/app-5000370856325519.component";
import { App5933547009721951Component } from "./components/app-5933547009721951/app-5933547009721951.component";

// @ts-ignore
import html from './app-1486023808762829.component.html?raw';
// @ts-ignore
import style from './app-1486023808762829.component.scss?inline';

/**
 * COMPONENT: 'app-1486023808762829'
 */

export const App1486023808762829Component = new Component({
  name: 'app-1486023808762829',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8714301806486781Component,
App6094723348041783Component,
App3436685976028289Component,
App5000370856325519Component,
App5933547009721951Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
