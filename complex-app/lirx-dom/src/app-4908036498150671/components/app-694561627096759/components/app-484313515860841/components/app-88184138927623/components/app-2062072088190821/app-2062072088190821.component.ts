import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8682534177156503Component } from "./components/app-8682534177156503/app-8682534177156503.component";
import { App94242114168395Component } from "./components/app-94242114168395/app-94242114168395.component";
import { App8440117658287723Component } from "./components/app-8440117658287723/app-8440117658287723.component";
import { App7555246083400911Component } from "./components/app-7555246083400911/app-7555246083400911.component";
import { App2467391600507399Component } from "./components/app-2467391600507399/app-2467391600507399.component";

// @ts-ignore
import html from './app-2062072088190821.component.html?raw';
// @ts-ignore
import style from './app-2062072088190821.component.scss?inline';

/**
 * COMPONENT: 'app-2062072088190821'
 */

export const App2062072088190821Component = new Component({
  name: 'app-2062072088190821',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8682534177156503Component,
App94242114168395Component,
App8440117658287723Component,
App7555246083400911Component,
App2467391600507399Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
