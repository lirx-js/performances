import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3908365940428839Component } from "./components/app-3908365940428839/app-3908365940428839.component";
import { App2154463750863073Component } from "./components/app-2154463750863073/app-2154463750863073.component";
import { App3247568604942943Component } from "./components/app-3247568604942943/app-3247568604942943.component";
import { App4615612280759605Component } from "./components/app-4615612280759605/app-4615612280759605.component";
import { App1882793322257091Component } from "./components/app-1882793322257091/app-1882793322257091.component";

// @ts-ignore
import html from './app-1079266731777079.component.html?raw';
// @ts-ignore
import style from './app-1079266731777079.component.scss?inline';

/**
 * COMPONENT: 'app-1079266731777079'
 */

export const App1079266731777079Component = new Component({
  name: 'app-1079266731777079',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3908365940428839Component,
App2154463750863073Component,
App3247568604942943Component,
App4615612280759605Component,
App1882793322257091Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
