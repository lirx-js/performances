import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7498406350739317Component } from "./components/app-7498406350739317/app-7498406350739317.component";
import { App7462162699924887Component } from "./components/app-7462162699924887/app-7462162699924887.component";
import { App1560323153996797Component } from "./components/app-1560323153996797/app-1560323153996797.component";
import { App2197539102064053Component } from "./components/app-2197539102064053/app-2197539102064053.component";
import { App1453716756443949Component } from "./components/app-1453716756443949/app-1453716756443949.component";

// @ts-ignore
import html from './app-5171073361507873.component.html?raw';
// @ts-ignore
import style from './app-5171073361507873.component.scss?inline';

/**
 * COMPONENT: 'app-5171073361507873'
 */

export const App5171073361507873Component = new Component({
  name: 'app-5171073361507873',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7498406350739317Component,
App7462162699924887Component,
App1560323153996797Component,
App2197539102064053Component,
App1453716756443949Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
