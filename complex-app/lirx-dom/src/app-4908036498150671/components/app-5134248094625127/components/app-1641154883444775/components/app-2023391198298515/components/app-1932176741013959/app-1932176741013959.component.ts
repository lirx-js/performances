import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2366824726079057Component } from "./components/app-2366824726079057/app-2366824726079057.component";
import { App5910753128494869Component } from "./components/app-5910753128494869/app-5910753128494869.component";
import { App8962445804578525Component } from "./components/app-8962445804578525/app-8962445804578525.component";
import { App8341775359185431Component } from "./components/app-8341775359185431/app-8341775359185431.component";
import { App4991025393016033Component } from "./components/app-4991025393016033/app-4991025393016033.component";

// @ts-ignore
import html from './app-1932176741013959.component.html?raw';
// @ts-ignore
import style from './app-1932176741013959.component.scss?inline';

/**
 * COMPONENT: 'app-1932176741013959'
 */

export const App1932176741013959Component = new Component({
  name: 'app-1932176741013959',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2366824726079057Component,
App5910753128494869Component,
App8962445804578525Component,
App8341775359185431Component,
App4991025393016033Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
