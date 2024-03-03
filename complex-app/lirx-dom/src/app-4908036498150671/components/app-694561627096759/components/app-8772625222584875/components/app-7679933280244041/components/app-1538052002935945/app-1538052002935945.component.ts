import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3526237497731757Component } from "./components/app-3526237497731757/app-3526237497731757.component";
import { App765904716736213Component } from "./components/app-765904716736213/app-765904716736213.component";
import { App6290919947767735Component } from "./components/app-6290919947767735/app-6290919947767735.component";
import { App541385629033329Component } from "./components/app-541385629033329/app-541385629033329.component";
import { App7999067749479469Component } from "./components/app-7999067749479469/app-7999067749479469.component";

// @ts-ignore
import html from './app-1538052002935945.component.html?raw';
// @ts-ignore
import style from './app-1538052002935945.component.scss?inline';

/**
 * COMPONENT: 'app-1538052002935945'
 */

export const App1538052002935945Component = new Component({
  name: 'app-1538052002935945',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3526237497731757Component,
App765904716736213Component,
App6290919947767735Component,
App541385629033329Component,
App7999067749479469Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
