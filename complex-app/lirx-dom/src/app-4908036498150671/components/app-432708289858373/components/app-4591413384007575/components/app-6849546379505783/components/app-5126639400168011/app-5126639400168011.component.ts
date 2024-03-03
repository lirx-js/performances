import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1676916816628799Component } from "./components/app-1676916816628799/app-1676916816628799.component";
import { App3015174330744969Component } from "./components/app-3015174330744969/app-3015174330744969.component";
import { App2994880892730777Component } from "./components/app-2994880892730777/app-2994880892730777.component";
import { App4954668419466419Component } from "./components/app-4954668419466419/app-4954668419466419.component";
import { App3358906582441633Component } from "./components/app-3358906582441633/app-3358906582441633.component";

// @ts-ignore
import html from './app-5126639400168011.component.html?raw';
// @ts-ignore
import style from './app-5126639400168011.component.scss?inline';

/**
 * COMPONENT: 'app-5126639400168011'
 */

export const App5126639400168011Component = new Component({
  name: 'app-5126639400168011',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1676916816628799Component,
App3015174330744969Component,
App2994880892730777Component,
App4954668419466419Component,
App3358906582441633Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
