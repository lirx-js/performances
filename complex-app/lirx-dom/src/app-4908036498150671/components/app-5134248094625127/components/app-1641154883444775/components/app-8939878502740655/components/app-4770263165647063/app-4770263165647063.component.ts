import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App937947079744545Component } from "./components/app-937947079744545/app-937947079744545.component";
import { App1667031100772151Component } from "./components/app-1667031100772151/app-1667031100772151.component";
import { App4558712330414875Component } from "./components/app-4558712330414875/app-4558712330414875.component";
import { App1572171178026643Component } from "./components/app-1572171178026643/app-1572171178026643.component";
import { App431290555787885Component } from "./components/app-431290555787885/app-431290555787885.component";

// @ts-ignore
import html from './app-4770263165647063.component.html?raw';
// @ts-ignore
import style from './app-4770263165647063.component.scss?inline';

/**
 * COMPONENT: 'app-4770263165647063'
 */

export const App4770263165647063Component = new Component({
  name: 'app-4770263165647063',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App937947079744545Component,
App1667031100772151Component,
App4558712330414875Component,
App1572171178026643Component,
App431290555787885Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
