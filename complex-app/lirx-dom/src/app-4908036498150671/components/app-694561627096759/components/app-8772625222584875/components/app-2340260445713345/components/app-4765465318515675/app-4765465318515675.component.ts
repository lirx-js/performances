import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2999197744965367Component } from "./components/app-2999197744965367/app-2999197744965367.component";
import { App4273916231940581Component } from "./components/app-4273916231940581/app-4273916231940581.component";
import { App2035779155442967Component } from "./components/app-2035779155442967/app-2035779155442967.component";
import { App8029642839877401Component } from "./components/app-8029642839877401/app-8029642839877401.component";
import { App5960271560665679Component } from "./components/app-5960271560665679/app-5960271560665679.component";

// @ts-ignore
import html from './app-4765465318515675.component.html?raw';
// @ts-ignore
import style from './app-4765465318515675.component.scss?inline';

/**
 * COMPONENT: 'app-4765465318515675'
 */

export const App4765465318515675Component = new Component({
  name: 'app-4765465318515675',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2999197744965367Component,
App4273916231940581Component,
App2035779155442967Component,
App8029642839877401Component,
App5960271560665679Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
