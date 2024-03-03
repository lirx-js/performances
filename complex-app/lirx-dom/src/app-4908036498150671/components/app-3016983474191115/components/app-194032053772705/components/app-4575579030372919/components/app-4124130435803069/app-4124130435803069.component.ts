import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3732216644080583Component } from "./components/app-3732216644080583/app-3732216644080583.component";
import { App6645269651180573Component } from "./components/app-6645269651180573/app-6645269651180573.component";
import { App3281328755955975Component } from "./components/app-3281328755955975/app-3281328755955975.component";
import { App2750619126094835Component } from "./components/app-2750619126094835/app-2750619126094835.component";
import { App6156333902833443Component } from "./components/app-6156333902833443/app-6156333902833443.component";

// @ts-ignore
import html from './app-4124130435803069.component.html?raw';
// @ts-ignore
import style from './app-4124130435803069.component.scss?inline';

/**
 * COMPONENT: 'app-4124130435803069'
 */

export const App4124130435803069Component = new Component({
  name: 'app-4124130435803069',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3732216644080583Component,
App6645269651180573Component,
App3281328755955975Component,
App2750619126094835Component,
App6156333902833443Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
