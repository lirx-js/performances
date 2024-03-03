import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7749344457745203Component } from "./components/app-7749344457745203/app-7749344457745203.component";
import { App7722345698161559Component } from "./components/app-7722345698161559/app-7722345698161559.component";
import { App3104247069520779Component } from "./components/app-3104247069520779/app-3104247069520779.component";
import { App255784109809263Component } from "./components/app-255784109809263/app-255784109809263.component";
import { App4594853580776939Component } from "./components/app-4594853580776939/app-4594853580776939.component";

// @ts-ignore
import html from './app-8159922817689059.component.html?raw';
// @ts-ignore
import style from './app-8159922817689059.component.scss?inline';

/**
 * COMPONENT: 'app-8159922817689059'
 */

export const App8159922817689059Component = new Component({
  name: 'app-8159922817689059',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7749344457745203Component,
App7722345698161559Component,
App3104247069520779Component,
App255784109809263Component,
App4594853580776939Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
