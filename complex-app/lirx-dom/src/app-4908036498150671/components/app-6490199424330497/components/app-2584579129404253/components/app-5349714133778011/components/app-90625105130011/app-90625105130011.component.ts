import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2652063409657719Component } from "./components/app-2652063409657719/app-2652063409657719.component";
import { App6541057957748633Component } from "./components/app-6541057957748633/app-6541057957748633.component";
import { App5195508528743247Component } from "./components/app-5195508528743247/app-5195508528743247.component";
import { App5102815996378323Component } from "./components/app-5102815996378323/app-5102815996378323.component";
import { App3071506493500697Component } from "./components/app-3071506493500697/app-3071506493500697.component";

// @ts-ignore
import html from './app-90625105130011.component.html?raw';
// @ts-ignore
import style from './app-90625105130011.component.scss?inline';

/**
 * COMPONENT: 'app-90625105130011'
 */

export const App90625105130011Component = new Component({
  name: 'app-90625105130011',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2652063409657719Component,
App6541057957748633Component,
App5195508528743247Component,
App5102815996378323Component,
App3071506493500697Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
