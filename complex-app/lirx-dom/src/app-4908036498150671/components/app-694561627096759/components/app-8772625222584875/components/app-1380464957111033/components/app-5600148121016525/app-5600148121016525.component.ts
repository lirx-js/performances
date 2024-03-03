import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1804357147794805Component } from "./components/app-1804357147794805/app-1804357147794805.component";
import { App7750142254514139Component } from "./components/app-7750142254514139/app-7750142254514139.component";
import { App1726922455657341Component } from "./components/app-1726922455657341/app-1726922455657341.component";
import { App3521777121764153Component } from "./components/app-3521777121764153/app-3521777121764153.component";
import { App1926379150199099Component } from "./components/app-1926379150199099/app-1926379150199099.component";

// @ts-ignore
import html from './app-5600148121016525.component.html?raw';
// @ts-ignore
import style from './app-5600148121016525.component.scss?inline';

/**
 * COMPONENT: 'app-5600148121016525'
 */

export const App5600148121016525Component = new Component({
  name: 'app-5600148121016525',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1804357147794805Component,
App7750142254514139Component,
App1726922455657341Component,
App3521777121764153Component,
App1926379150199099Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
