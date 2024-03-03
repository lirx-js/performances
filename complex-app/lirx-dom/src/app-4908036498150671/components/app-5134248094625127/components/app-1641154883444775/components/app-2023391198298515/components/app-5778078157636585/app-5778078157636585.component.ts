import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7665367757537881Component } from "./components/app-7665367757537881/app-7665367757537881.component";
import { App3004127930028015Component } from "./components/app-3004127930028015/app-3004127930028015.component";
import { App2495240482423397Component } from "./components/app-2495240482423397/app-2495240482423397.component";
import { App1345798162699933Component } from "./components/app-1345798162699933/app-1345798162699933.component";
import { App3193463047045881Component } from "./components/app-3193463047045881/app-3193463047045881.component";

// @ts-ignore
import html from './app-5778078157636585.component.html?raw';
// @ts-ignore
import style from './app-5778078157636585.component.scss?inline';

/**
 * COMPONENT: 'app-5778078157636585'
 */

export const App5778078157636585Component = new Component({
  name: 'app-5778078157636585',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7665367757537881Component,
App3004127930028015Component,
App2495240482423397Component,
App1345798162699933Component,
App3193463047045881Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
