import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4669482158131115Component } from "./components/app-4669482158131115/app-4669482158131115.component";
import { App5271690480205047Component } from "./components/app-5271690480205047/app-5271690480205047.component";
import { App6142697391593795Component } from "./components/app-6142697391593795/app-6142697391593795.component";
import { App5775324006179293Component } from "./components/app-5775324006179293/app-5775324006179293.component";
import { App5676371233309591Component } from "./components/app-5676371233309591/app-5676371233309591.component";

// @ts-ignore
import html from './app-2555673692150179.component.html?raw';
// @ts-ignore
import style from './app-2555673692150179.component.scss?inline';

/**
 * COMPONENT: 'app-2555673692150179'
 */

export const App2555673692150179Component = new Component({
  name: 'app-2555673692150179',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4669482158131115Component,
App5271690480205047Component,
App6142697391593795Component,
App5775324006179293Component,
App5676371233309591Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
