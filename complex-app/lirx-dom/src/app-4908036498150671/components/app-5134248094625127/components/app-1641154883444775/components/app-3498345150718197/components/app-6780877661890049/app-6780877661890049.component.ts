import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8726372520205695Component } from "./components/app-8726372520205695/app-8726372520205695.component";
import { App7815199694827789Component } from "./components/app-7815199694827789/app-7815199694827789.component";
import { App7683744796134557Component } from "./components/app-7683744796134557/app-7683744796134557.component";
import { App905653034957439Component } from "./components/app-905653034957439/app-905653034957439.component";
import { App2913428322950977Component } from "./components/app-2913428322950977/app-2913428322950977.component";

// @ts-ignore
import html from './app-6780877661890049.component.html?raw';
// @ts-ignore
import style from './app-6780877661890049.component.scss?inline';

/**
 * COMPONENT: 'app-6780877661890049'
 */

export const App6780877661890049Component = new Component({
  name: 'app-6780877661890049',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8726372520205695Component,
App7815199694827789Component,
App7683744796134557Component,
App905653034957439Component,
App2913428322950977Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
