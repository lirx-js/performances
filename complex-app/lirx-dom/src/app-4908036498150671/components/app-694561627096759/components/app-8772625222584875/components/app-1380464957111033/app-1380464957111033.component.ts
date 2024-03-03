import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5600148121016525Component } from "./components/app-5600148121016525/app-5600148121016525.component";
import { App5627906961904457Component } from "./components/app-5627906961904457/app-5627906961904457.component";
import { App231446902807413Component } from "./components/app-231446902807413/app-231446902807413.component";
import { App2634739396050815Component } from "./components/app-2634739396050815/app-2634739396050815.component";
import { App3069116851140469Component } from "./components/app-3069116851140469/app-3069116851140469.component";

// @ts-ignore
import html from './app-1380464957111033.component.html?raw';
// @ts-ignore
import style from './app-1380464957111033.component.scss?inline';

/**
 * COMPONENT: 'app-1380464957111033'
 */

export const App1380464957111033Component = new Component({
  name: 'app-1380464957111033',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5600148121016525Component,
App5627906961904457Component,
App231446902807413Component,
App2634739396050815Component,
App3069116851140469Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
