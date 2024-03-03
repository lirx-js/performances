import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8586473060560449Component } from "./components/app-8586473060560449/app-8586473060560449.component";
import { App7228248025377377Component } from "./components/app-7228248025377377/app-7228248025377377.component";
import { App5477819044925045Component } from "./components/app-5477819044925045/app-5477819044925045.component";
import { App7465424195473011Component } from "./components/app-7465424195473011/app-7465424195473011.component";
import { App1755250368685647Component } from "./components/app-1755250368685647/app-1755250368685647.component";

// @ts-ignore
import html from './app-1792817513670841.component.html?raw';
// @ts-ignore
import style from './app-1792817513670841.component.scss?inline';

/**
 * COMPONENT: 'app-1792817513670841'
 */

export const App1792817513670841Component = new Component({
  name: 'app-1792817513670841',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8586473060560449Component,
App7228248025377377Component,
App5477819044925045Component,
App7465424195473011Component,
App1755250368685647Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
