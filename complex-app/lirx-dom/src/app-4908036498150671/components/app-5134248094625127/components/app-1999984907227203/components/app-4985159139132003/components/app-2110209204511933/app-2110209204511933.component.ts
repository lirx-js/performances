import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6146057188894383Component } from "./components/app-6146057188894383/app-6146057188894383.component";
import { App7028704662576977Component } from "./components/app-7028704662576977/app-7028704662576977.component";
import { App1639689966331467Component } from "./components/app-1639689966331467/app-1639689966331467.component";
import { App3291821534110583Component } from "./components/app-3291821534110583/app-3291821534110583.component";
import { App1212847566322613Component } from "./components/app-1212847566322613/app-1212847566322613.component";

// @ts-ignore
import html from './app-2110209204511933.component.html?raw';
// @ts-ignore
import style from './app-2110209204511933.component.scss?inline';

/**
 * COMPONENT: 'app-2110209204511933'
 */

export const App2110209204511933Component = new Component({
  name: 'app-2110209204511933',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6146057188894383Component,
App7028704662576977Component,
App1639689966331467Component,
App3291821534110583Component,
App1212847566322613Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
