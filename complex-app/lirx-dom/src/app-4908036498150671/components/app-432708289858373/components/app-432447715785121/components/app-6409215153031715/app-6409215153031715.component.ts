import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2365571406010603Component } from "./components/app-2365571406010603/app-2365571406010603.component";
import { App2650288134038553Component } from "./components/app-2650288134038553/app-2650288134038553.component";
import { App1486023808762829Component } from "./components/app-1486023808762829/app-1486023808762829.component";
import { App1848702176874965Component } from "./components/app-1848702176874965/app-1848702176874965.component";
import { App4515748890802813Component } from "./components/app-4515748890802813/app-4515748890802813.component";

// @ts-ignore
import html from './app-6409215153031715.component.html?raw';
// @ts-ignore
import style from './app-6409215153031715.component.scss?inline';

/**
 * COMPONENT: 'app-6409215153031715'
 */

export const App6409215153031715Component = new Component({
  name: 'app-6409215153031715',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2365571406010603Component,
App2650288134038553Component,
App1486023808762829Component,
App1848702176874965Component,
App4515748890802813Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
