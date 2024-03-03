import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4497841566889821Component } from "./components/app-4497841566889821/app-4497841566889821.component";
import { App989562631015625Component } from "./components/app-989562631015625/app-989562631015625.component";
import { App7394051086366867Component } from "./components/app-7394051086366867/app-7394051086366867.component";
import { App1099984951932925Component } from "./components/app-1099984951932925/app-1099984951932925.component";
import { App6490222208799653Component } from "./components/app-6490222208799653/app-6490222208799653.component";

// @ts-ignore
import html from './app-3645586422704467.component.html?raw';
// @ts-ignore
import style from './app-3645586422704467.component.scss?inline';

/**
 * COMPONENT: 'app-3645586422704467'
 */

export const App3645586422704467Component = new Component({
  name: 'app-3645586422704467',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4497841566889821Component,
App989562631015625Component,
App7394051086366867Component,
App1099984951932925Component,
App6490222208799653Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
