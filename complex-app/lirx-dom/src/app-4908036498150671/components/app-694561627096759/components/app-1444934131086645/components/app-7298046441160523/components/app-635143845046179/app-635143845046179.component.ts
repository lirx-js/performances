import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8378981045837023Component } from "./components/app-8378981045837023/app-8378981045837023.component";
import { App2000062942813845Component } from "./components/app-2000062942813845/app-2000062942813845.component";
import { App4200038459283829Component } from "./components/app-4200038459283829/app-4200038459283829.component";
import { App2809530309627075Component } from "./components/app-2809530309627075/app-2809530309627075.component";
import { App7943596612256935Component } from "./components/app-7943596612256935/app-7943596612256935.component";

// @ts-ignore
import html from './app-635143845046179.component.html?raw';
// @ts-ignore
import style from './app-635143845046179.component.scss?inline';

/**
 * COMPONENT: 'app-635143845046179'
 */

export const App635143845046179Component = new Component({
  name: 'app-635143845046179',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8378981045837023Component,
App2000062942813845Component,
App4200038459283829Component,
App2809530309627075Component,
App7943596612256935Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
