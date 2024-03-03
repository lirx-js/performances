import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6499643235466709Component } from "./components/app-6499643235466709/app-6499643235466709.component";
import { App5071253277792269Component } from "./components/app-5071253277792269/app-5071253277792269.component";
import { App8875111648721047Component } from "./components/app-8875111648721047/app-8875111648721047.component";
import { App8205112523242351Component } from "./components/app-8205112523242351/app-8205112523242351.component";
import { App5570659066724929Component } from "./components/app-5570659066724929/app-5570659066724929.component";

// @ts-ignore
import html from './app-4515748890802813.component.html?raw';
// @ts-ignore
import style from './app-4515748890802813.component.scss?inline';

/**
 * COMPONENT: 'app-4515748890802813'
 */

export const App4515748890802813Component = new Component({
  name: 'app-4515748890802813',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6499643235466709Component,
App5071253277792269Component,
App8875111648721047Component,
App8205112523242351Component,
App5570659066724929Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
