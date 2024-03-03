import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5597764022739835Component } from "./components/app-5597764022739835/app-5597764022739835.component";
import { App6047633127891983Component } from "./components/app-6047633127891983/app-6047633127891983.component";
import { App360529481767081Component } from "./components/app-360529481767081/app-360529481767081.component";
import { App5472321155716119Component } from "./components/app-5472321155716119/app-5472321155716119.component";
import { App105497899442419Component } from "./components/app-105497899442419/app-105497899442419.component";

// @ts-ignore
import html from './app-4142504387515341.component.html?raw';
// @ts-ignore
import style from './app-4142504387515341.component.scss?inline';

/**
 * COMPONENT: 'app-4142504387515341'
 */

export const App4142504387515341Component = new Component({
  name: 'app-4142504387515341',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5597764022739835Component,
App6047633127891983Component,
App360529481767081Component,
App5472321155716119Component,
App105497899442419Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
