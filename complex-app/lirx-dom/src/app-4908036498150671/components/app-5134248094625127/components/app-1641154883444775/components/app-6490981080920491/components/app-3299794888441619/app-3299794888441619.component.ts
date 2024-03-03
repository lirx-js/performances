import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5225141777513641Component } from "./components/app-5225141777513641/app-5225141777513641.component";
import { App8685449562592315Component } from "./components/app-8685449562592315/app-8685449562592315.component";
import { App4973327244371473Component } from "./components/app-4973327244371473/app-4973327244371473.component";
import { App60345876814763Component } from "./components/app-60345876814763/app-60345876814763.component";
import { App7820053461016829Component } from "./components/app-7820053461016829/app-7820053461016829.component";

// @ts-ignore
import html from './app-3299794888441619.component.html?raw';
// @ts-ignore
import style from './app-3299794888441619.component.scss?inline';

/**
 * COMPONENT: 'app-3299794888441619'
 */

export const App3299794888441619Component = new Component({
  name: 'app-3299794888441619',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5225141777513641Component,
App8685449562592315Component,
App4973327244371473Component,
App60345876814763Component,
App7820053461016829Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
