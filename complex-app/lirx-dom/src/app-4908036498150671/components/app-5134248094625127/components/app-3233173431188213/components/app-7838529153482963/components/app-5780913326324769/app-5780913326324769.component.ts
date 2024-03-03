import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3868963143981021Component } from "./components/app-3868963143981021/app-3868963143981021.component";
import { App1144163086094483Component } from "./components/app-1144163086094483/app-1144163086094483.component";
import { App4360309010067607Component } from "./components/app-4360309010067607/app-4360309010067607.component";
import { App1200156105865783Component } from "./components/app-1200156105865783/app-1200156105865783.component";
import { App3109856976604697Component } from "./components/app-3109856976604697/app-3109856976604697.component";

// @ts-ignore
import html from './app-5780913326324769.component.html?raw';
// @ts-ignore
import style from './app-5780913326324769.component.scss?inline';

/**
 * COMPONENT: 'app-5780913326324769'
 */

export const App5780913326324769Component = new Component({
  name: 'app-5780913326324769',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3868963143981021Component,
App1144163086094483Component,
App4360309010067607Component,
App1200156105865783Component,
App3109856976604697Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
