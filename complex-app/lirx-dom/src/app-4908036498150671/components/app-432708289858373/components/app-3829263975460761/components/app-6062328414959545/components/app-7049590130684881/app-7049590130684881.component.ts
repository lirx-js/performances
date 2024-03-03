import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5503371125821813Component } from "./components/app-5503371125821813/app-5503371125821813.component";
import { App769587548939897Component } from "./components/app-769587548939897/app-769587548939897.component";
import { App1874421157253545Component } from "./components/app-1874421157253545/app-1874421157253545.component";
import { App3972835422559685Component } from "./components/app-3972835422559685/app-3972835422559685.component";
import { App5401046852271145Component } from "./components/app-5401046852271145/app-5401046852271145.component";

// @ts-ignore
import html from './app-7049590130684881.component.html?raw';
// @ts-ignore
import style from './app-7049590130684881.component.scss?inline';

/**
 * COMPONENT: 'app-7049590130684881'
 */

export const App7049590130684881Component = new Component({
  name: 'app-7049590130684881',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5503371125821813Component,
App769587548939897Component,
App1874421157253545Component,
App3972835422559685Component,
App5401046852271145Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
