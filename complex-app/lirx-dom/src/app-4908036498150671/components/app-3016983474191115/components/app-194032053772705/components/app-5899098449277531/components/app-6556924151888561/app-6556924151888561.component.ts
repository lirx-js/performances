import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7699287488864859Component } from "./components/app-7699287488864859/app-7699287488864859.component";
import { App6731801682184911Component } from "./components/app-6731801682184911/app-6731801682184911.component";
import { App4974319356201021Component } from "./components/app-4974319356201021/app-4974319356201021.component";
import { App3054061473390821Component } from "./components/app-3054061473390821/app-3054061473390821.component";
import { App7939165685689513Component } from "./components/app-7939165685689513/app-7939165685689513.component";

// @ts-ignore
import html from './app-6556924151888561.component.html?raw';
// @ts-ignore
import style from './app-6556924151888561.component.scss?inline';

/**
 * COMPONENT: 'app-6556924151888561'
 */

export const App6556924151888561Component = new Component({
  name: 'app-6556924151888561',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7699287488864859Component,
App6731801682184911Component,
App4974319356201021Component,
App3054061473390821Component,
App7939165685689513Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
