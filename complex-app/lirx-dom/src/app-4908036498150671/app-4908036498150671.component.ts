import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App694561627096759Component } from "./components/app-694561627096759/app-694561627096759.component";
import { App3016983474191115Component } from "./components/app-3016983474191115/app-3016983474191115.component";
import { App432708289858373Component } from "./components/app-432708289858373/app-432708289858373.component";
import { App5134248094625127Component } from "./components/app-5134248094625127/app-5134248094625127.component";
import { App6490199424330497Component } from "./components/app-6490199424330497/app-6490199424330497.component";

// @ts-ignore
import html from './app-4908036498150671.component.html?raw';
// @ts-ignore
import style from './app-4908036498150671.component.scss?inline';

/**
 * COMPONENT: 'app-4908036498150671'
 */

export const App4908036498150671Component = new Component({
  name: 'app-4908036498150671',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App694561627096759Component,
App3016983474191115Component,
App432708289858373Component,
App5134248094625127Component,
App6490199424330497Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
