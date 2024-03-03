import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App621252559455689Component } from "./components/app-621252559455689/app-621252559455689.component";
import { App6692763130050137Component } from "./components/app-6692763130050137/app-6692763130050137.component";
import { App6522497419465349Component } from "./components/app-6522497419465349/app-6522497419465349.component";
import { App5644660396382471Component } from "./components/app-5644660396382471/app-5644660396382471.component";
import { App5292909991064883Component } from "./components/app-5292909991064883/app-5292909991064883.component";

// @ts-ignore
import html from './app-7183487678032065.component.html?raw';
// @ts-ignore
import style from './app-7183487678032065.component.scss?inline';

/**
 * COMPONENT: 'app-7183487678032065'
 */

export const App7183487678032065Component = new Component({
  name: 'app-7183487678032065',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App621252559455689Component,
App6692763130050137Component,
App6522497419465349Component,
App5644660396382471Component,
App5292909991064883Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
