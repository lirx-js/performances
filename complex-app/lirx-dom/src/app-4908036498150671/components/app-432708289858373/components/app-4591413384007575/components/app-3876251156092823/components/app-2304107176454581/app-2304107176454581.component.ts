import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1348588018398367Component } from "./components/app-1348588018398367/app-1348588018398367.component";
import { App295632729536743Component } from "./components/app-295632729536743/app-295632729536743.component";
import { App3662135297685223Component } from "./components/app-3662135297685223/app-3662135297685223.component";
import { App6861183023629643Component } from "./components/app-6861183023629643/app-6861183023629643.component";
import { App182289880222153Component } from "./components/app-182289880222153/app-182289880222153.component";

// @ts-ignore
import html from './app-2304107176454581.component.html?raw';
// @ts-ignore
import style from './app-2304107176454581.component.scss?inline';

/**
 * COMPONENT: 'app-2304107176454581'
 */

export const App2304107176454581Component = new Component({
  name: 'app-2304107176454581',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1348588018398367Component,
App295632729536743Component,
App3662135297685223Component,
App6861183023629643Component,
App182289880222153Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
