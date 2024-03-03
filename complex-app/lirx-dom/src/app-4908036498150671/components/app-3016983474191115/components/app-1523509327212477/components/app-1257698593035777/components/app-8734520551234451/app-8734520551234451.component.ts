import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3215614287222851Component } from "./components/app-3215614287222851/app-3215614287222851.component";
import { App4264871227358733Component } from "./components/app-4264871227358733/app-4264871227358733.component";
import { App5842662537516019Component } from "./components/app-5842662537516019/app-5842662537516019.component";
import { App8106144347626205Component } from "./components/app-8106144347626205/app-8106144347626205.component";
import { App3676340775842247Component } from "./components/app-3676340775842247/app-3676340775842247.component";

// @ts-ignore
import html from './app-8734520551234451.component.html?raw';
// @ts-ignore
import style from './app-8734520551234451.component.scss?inline';

/**
 * COMPONENT: 'app-8734520551234451'
 */

export const App8734520551234451Component = new Component({
  name: 'app-8734520551234451',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3215614287222851Component,
App4264871227358733Component,
App5842662537516019Component,
App8106144347626205Component,
App3676340775842247Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
