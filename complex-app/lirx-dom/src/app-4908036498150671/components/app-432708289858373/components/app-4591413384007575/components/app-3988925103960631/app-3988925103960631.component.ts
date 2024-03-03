import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App745753316486807Component } from "./components/app-745753316486807/app-745753316486807.component";
import { App973462954958447Component } from "./components/app-973462954958447/app-973462954958447.component";
import { App4857541839998251Component } from "./components/app-4857541839998251/app-4857541839998251.component";
import { App7307799587813987Component } from "./components/app-7307799587813987/app-7307799587813987.component";
import { App7697403828808487Component } from "./components/app-7697403828808487/app-7697403828808487.component";

// @ts-ignore
import html from './app-3988925103960631.component.html?raw';
// @ts-ignore
import style from './app-3988925103960631.component.scss?inline';

/**
 * COMPONENT: 'app-3988925103960631'
 */

export const App3988925103960631Component = new Component({
  name: 'app-3988925103960631',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App745753316486807Component,
App973462954958447Component,
App4857541839998251Component,
App7307799587813987Component,
App7697403828808487Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
