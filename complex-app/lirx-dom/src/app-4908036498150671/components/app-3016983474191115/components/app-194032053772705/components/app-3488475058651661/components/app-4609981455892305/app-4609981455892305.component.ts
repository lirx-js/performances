import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8459624278857129Component } from "./components/app-8459624278857129/app-8459624278857129.component";
import { App3938998378989313Component } from "./components/app-3938998378989313/app-3938998378989313.component";
import { App3526123034698125Component } from "./components/app-3526123034698125/app-3526123034698125.component";
import { App972891765648003Component } from "./components/app-972891765648003/app-972891765648003.component";
import { App7865503129739093Component } from "./components/app-7865503129739093/app-7865503129739093.component";

// @ts-ignore
import html from './app-4609981455892305.component.html?raw';
// @ts-ignore
import style from './app-4609981455892305.component.scss?inline';

/**
 * COMPONENT: 'app-4609981455892305'
 */

export const App4609981455892305Component = new Component({
  name: 'app-4609981455892305',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8459624278857129Component,
App3938998378989313Component,
App3526123034698125Component,
App972891765648003Component,
App7865503129739093Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
