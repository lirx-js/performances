import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5793054964859533Component } from "./components/app-5793054964859533/app-5793054964859533.component";
import { App8702200168386187Component } from "./components/app-8702200168386187/app-8702200168386187.component";
import { App3944972709225395Component } from "./components/app-3944972709225395/app-3944972709225395.component";
import { App1766330757683101Component } from "./components/app-1766330757683101/app-1766330757683101.component";
import { App126237954448043Component } from "./components/app-126237954448043/app-126237954448043.component";

// @ts-ignore
import html from './app-1293941293810047.component.html?raw';
// @ts-ignore
import style from './app-1293941293810047.component.scss?inline';

/**
 * COMPONENT: 'app-1293941293810047'
 */

export const App1293941293810047Component = new Component({
  name: 'app-1293941293810047',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5793054964859533Component,
App8702200168386187Component,
App3944972709225395Component,
App1766330757683101Component,
App126237954448043Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
