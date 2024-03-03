import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3696486023771205Component } from "./components/app-3696486023771205/app-3696486023771205.component";
import { App3358610700142257Component } from "./components/app-3358610700142257/app-3358610700142257.component";
import { App3117605556091509Component } from "./components/app-3117605556091509/app-3117605556091509.component";
import { App6982859573566803Component } from "./components/app-6982859573566803/app-6982859573566803.component";
import { App1723711766143311Component } from "./components/app-1723711766143311/app-1723711766143311.component";

// @ts-ignore
import html from './app-6776313898257259.component.html?raw';
// @ts-ignore
import style from './app-6776313898257259.component.scss?inline';

/**
 * COMPONENT: 'app-6776313898257259'
 */

export const App6776313898257259Component = new Component({
  name: 'app-6776313898257259',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3696486023771205Component,
App3358610700142257Component,
App3117605556091509Component,
App6982859573566803Component,
App1723711766143311Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
