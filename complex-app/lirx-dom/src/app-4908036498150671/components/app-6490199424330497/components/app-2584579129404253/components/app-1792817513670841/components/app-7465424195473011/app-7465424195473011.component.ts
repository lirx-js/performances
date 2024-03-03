import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4357458227303909Component } from "./components/app-4357458227303909/app-4357458227303909.component";
import { App4839323423675641Component } from "./components/app-4839323423675641/app-4839323423675641.component";
import { App547897157355059Component } from "./components/app-547897157355059/app-547897157355059.component";
import { App6799297526495883Component } from "./components/app-6799297526495883/app-6799297526495883.component";
import { App6544689908672189Component } from "./components/app-6544689908672189/app-6544689908672189.component";

// @ts-ignore
import html from './app-7465424195473011.component.html?raw';
// @ts-ignore
import style from './app-7465424195473011.component.scss?inline';

/**
 * COMPONENT: 'app-7465424195473011'
 */

export const App7465424195473011Component = new Component({
  name: 'app-7465424195473011',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4357458227303909Component,
App4839323423675641Component,
App547897157355059Component,
App6799297526495883Component,
App6544689908672189Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
