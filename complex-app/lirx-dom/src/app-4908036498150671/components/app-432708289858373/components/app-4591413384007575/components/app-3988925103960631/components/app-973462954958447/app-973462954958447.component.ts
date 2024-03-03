import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8909065334752919Component } from "./components/app-8909065334752919/app-8909065334752919.component";
import { App5779856955975081Component } from "./components/app-5779856955975081/app-5779856955975081.component";
import { App3819983867513033Component } from "./components/app-3819983867513033/app-3819983867513033.component";
import { App1725513822852313Component } from "./components/app-1725513822852313/app-1725513822852313.component";
import { App8037271865233289Component } from "./components/app-8037271865233289/app-8037271865233289.component";

// @ts-ignore
import html from './app-973462954958447.component.html?raw';
// @ts-ignore
import style from './app-973462954958447.component.scss?inline';

/**
 * COMPONENT: 'app-973462954958447'
 */

export const App973462954958447Component = new Component({
  name: 'app-973462954958447',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8909065334752919Component,
App5779856955975081Component,
App3819983867513033Component,
App1725513822852313Component,
App8037271865233289Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
