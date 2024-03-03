import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App225373937254905Component } from "./components/app-225373937254905/app-225373937254905.component";
import { App5812935786710645Component } from "./components/app-5812935786710645/app-5812935786710645.component";
import { App7787580468873755Component } from "./components/app-7787580468873755/app-7787580468873755.component";
import { App8122667512047959Component } from "./components/app-8122667512047959/app-8122667512047959.component";
import { App8023677377475039Component } from "./components/app-8023677377475039/app-8023677377475039.component";

// @ts-ignore
import html from './app-8514068885466695.component.html?raw';
// @ts-ignore
import style from './app-8514068885466695.component.scss?inline';

/**
 * COMPONENT: 'app-8514068885466695'
 */

export const App8514068885466695Component = new Component({
  name: 'app-8514068885466695',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App225373937254905Component,
App5812935786710645Component,
App7787580468873755Component,
App8122667512047959Component,
App8023677377475039Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
