import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2840796762771069Component } from "./components/app-2840796762771069/app-2840796762771069.component";
import { App6829656780451975Component } from "./components/app-6829656780451975/app-6829656780451975.component";
import { App3517507287002997Component } from "./components/app-3517507287002997/app-3517507287002997.component";
import { App5716703491643269Component } from "./components/app-5716703491643269/app-5716703491643269.component";
import { App7562790040267719Component } from "./components/app-7562790040267719/app-7562790040267719.component";

// @ts-ignore
import html from './app-984222253117861.component.html?raw';
// @ts-ignore
import style from './app-984222253117861.component.scss?inline';

/**
 * COMPONENT: 'app-984222253117861'
 */

export const App984222253117861Component = new Component({
  name: 'app-984222253117861',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2840796762771069Component,
App6829656780451975Component,
App3517507287002997Component,
App5716703491643269Component,
App7562790040267719Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
