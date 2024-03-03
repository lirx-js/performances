import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App318621682191731Component } from "./components/app-318621682191731/app-318621682191731.component";
import { App8542342222191517Component } from "./components/app-8542342222191517/app-8542342222191517.component";
import { App4740408544272401Component } from "./components/app-4740408544272401/app-4740408544272401.component";
import { App7996905469438303Component } from "./components/app-7996905469438303/app-7996905469438303.component";
import { App8555206119084301Component } from "./components/app-8555206119084301/app-8555206119084301.component";

// @ts-ignore
import html from './app-7779042133403559.component.html?raw';
// @ts-ignore
import style from './app-7779042133403559.component.scss?inline';

/**
 * COMPONENT: 'app-7779042133403559'
 */

export const App7779042133403559Component = new Component({
  name: 'app-7779042133403559',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App318621682191731Component,
App8542342222191517Component,
App4740408544272401Component,
App7996905469438303Component,
App8555206119084301Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
