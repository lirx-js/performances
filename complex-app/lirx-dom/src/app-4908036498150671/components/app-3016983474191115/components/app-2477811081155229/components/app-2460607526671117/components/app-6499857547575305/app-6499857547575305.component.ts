import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1020217114732091Component } from "./components/app-1020217114732091/app-1020217114732091.component";
import { App2715936433682791Component } from "./components/app-2715936433682791/app-2715936433682791.component";
import { App6054379165012521Component } from "./components/app-6054379165012521/app-6054379165012521.component";
import { App2037117856381255Component } from "./components/app-2037117856381255/app-2037117856381255.component";
import { App2837244412256075Component } from "./components/app-2837244412256075/app-2837244412256075.component";

// @ts-ignore
import html from './app-6499857547575305.component.html?raw';
// @ts-ignore
import style from './app-6499857547575305.component.scss?inline';

/**
 * COMPONENT: 'app-6499857547575305'
 */

export const App6499857547575305Component = new Component({
  name: 'app-6499857547575305',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1020217114732091Component,
App2715936433682791Component,
App6054379165012521Component,
App2037117856381255Component,
App2837244412256075Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
