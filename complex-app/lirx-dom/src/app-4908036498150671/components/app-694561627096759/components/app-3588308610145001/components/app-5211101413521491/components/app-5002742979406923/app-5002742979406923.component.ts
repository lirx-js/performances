import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8270040193247757Component } from "./components/app-8270040193247757/app-8270040193247757.component";
import { App915921636619173Component } from "./components/app-915921636619173/app-915921636619173.component";
import { App3747210367937627Component } from "./components/app-3747210367937627/app-3747210367937627.component";
import { App389612034233047Component } from "./components/app-389612034233047/app-389612034233047.component";
import { App3166674268502109Component } from "./components/app-3166674268502109/app-3166674268502109.component";

// @ts-ignore
import html from './app-5002742979406923.component.html?raw';
// @ts-ignore
import style from './app-5002742979406923.component.scss?inline';

/**
 * COMPONENT: 'app-5002742979406923'
 */

export const App5002742979406923Component = new Component({
  name: 'app-5002742979406923',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8270040193247757Component,
App915921636619173Component,
App3747210367937627Component,
App389612034233047Component,
App3166674268502109Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
