import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5277613307099627Component } from "./components/app-5277613307099627/app-5277613307099627.component";
import { App6751840419164503Component } from "./components/app-6751840419164503/app-6751840419164503.component";
import { App6491903812361093Component } from "./components/app-6491903812361093/app-6491903812361093.component";
import { App4501660955396895Component } from "./components/app-4501660955396895/app-4501660955396895.component";
import { App6425711786367139Component } from "./components/app-6425711786367139/app-6425711786367139.component";

// @ts-ignore
import html from './app-2712359454031859.component.html?raw';
// @ts-ignore
import style from './app-2712359454031859.component.scss?inline';

/**
 * COMPONENT: 'app-2712359454031859'
 */

export const App2712359454031859Component = new Component({
  name: 'app-2712359454031859',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5277613307099627Component,
App6751840419164503Component,
App6491903812361093Component,
App4501660955396895Component,
App6425711786367139Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
