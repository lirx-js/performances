import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App795410483233353Component } from "./components/app-795410483233353/app-795410483233353.component";
import { App5384041988222175Component } from "./components/app-5384041988222175/app-5384041988222175.component";
import { App7313799146175719Component } from "./components/app-7313799146175719/app-7313799146175719.component";
import { App8522662137074119Component } from "./components/app-8522662137074119/app-8522662137074119.component";
import { App4172006993807715Component } from "./components/app-4172006993807715/app-4172006993807715.component";

// @ts-ignore
import html from './app-3069116851140469.component.html?raw';
// @ts-ignore
import style from './app-3069116851140469.component.scss?inline';

/**
 * COMPONENT: 'app-3069116851140469'
 */

export const App3069116851140469Component = new Component({
  name: 'app-3069116851140469',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App795410483233353Component,
App5384041988222175Component,
App7313799146175719Component,
App8522662137074119Component,
App4172006993807715Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
