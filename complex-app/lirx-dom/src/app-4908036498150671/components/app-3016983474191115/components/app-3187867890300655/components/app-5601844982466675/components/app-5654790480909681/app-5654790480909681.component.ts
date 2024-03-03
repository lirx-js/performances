import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6416485035803757Component } from "./components/app-6416485035803757/app-6416485035803757.component";
import { App4509011918479151Component } from "./components/app-4509011918479151/app-4509011918479151.component";
import { App6621471129614565Component } from "./components/app-6621471129614565/app-6621471129614565.component";
import { App4628787990235735Component } from "./components/app-4628787990235735/app-4628787990235735.component";
import { App6757597389270297Component } from "./components/app-6757597389270297/app-6757597389270297.component";

// @ts-ignore
import html from './app-5654790480909681.component.html?raw';
// @ts-ignore
import style from './app-5654790480909681.component.scss?inline';

/**
 * COMPONENT: 'app-5654790480909681'
 */

export const App5654790480909681Component = new Component({
  name: 'app-5654790480909681',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6416485035803757Component,
App4509011918479151Component,
App6621471129614565Component,
App4628787990235735Component,
App6757597389270297Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
