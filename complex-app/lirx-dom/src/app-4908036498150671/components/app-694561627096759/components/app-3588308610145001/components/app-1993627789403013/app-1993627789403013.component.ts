import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3547912184831439Component } from "./components/app-3547912184831439/app-3547912184831439.component";
import { App6191276847870377Component } from "./components/app-6191276847870377/app-6191276847870377.component";
import { App4049268665130649Component } from "./components/app-4049268665130649/app-4049268665130649.component";
import { App7382518948680961Component } from "./components/app-7382518948680961/app-7382518948680961.component";
import { App7235092329472073Component } from "./components/app-7235092329472073/app-7235092329472073.component";

// @ts-ignore
import html from './app-1993627789403013.component.html?raw';
// @ts-ignore
import style from './app-1993627789403013.component.scss?inline';

/**
 * COMPONENT: 'app-1993627789403013'
 */

export const App1993627789403013Component = new Component({
  name: 'app-1993627789403013',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3547912184831439Component,
App6191276847870377Component,
App4049268665130649Component,
App7382518948680961Component,
App7235092329472073Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
