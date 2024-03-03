import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1953740400737155Component } from "./components/app-1953740400737155/app-1953740400737155.component";
import { App471203676867977Component } from "./components/app-471203676867977/app-471203676867977.component";
import { App7555567872094239Component } from "./components/app-7555567872094239/app-7555567872094239.component";
import { App1966083473813943Component } from "./components/app-1966083473813943/app-1966083473813943.component";
import { App7414507487478447Component } from "./components/app-7414507487478447/app-7414507487478447.component";

// @ts-ignore
import html from './app-5839557360692697.component.html?raw';
// @ts-ignore
import style from './app-5839557360692697.component.scss?inline';

/**
 * COMPONENT: 'app-5839557360692697'
 */

export const App5839557360692697Component = new Component({
  name: 'app-5839557360692697',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1953740400737155Component,
App471203676867977Component,
App7555567872094239Component,
App1966083473813943Component,
App7414507487478447Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
