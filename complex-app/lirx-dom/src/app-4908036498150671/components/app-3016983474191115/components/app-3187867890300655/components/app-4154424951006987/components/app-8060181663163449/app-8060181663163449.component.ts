import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8192158107224095Component } from "./components/app-8192158107224095/app-8192158107224095.component";
import { App4495496576062331Component } from "./components/app-4495496576062331/app-4495496576062331.component";
import { App3634947794914501Component } from "./components/app-3634947794914501/app-3634947794914501.component";
import { App3110810724870133Component } from "./components/app-3110810724870133/app-3110810724870133.component";
import { App5205238020908141Component } from "./components/app-5205238020908141/app-5205238020908141.component";

// @ts-ignore
import html from './app-8060181663163449.component.html?raw';
// @ts-ignore
import style from './app-8060181663163449.component.scss?inline';

/**
 * COMPONENT: 'app-8060181663163449'
 */

export const App8060181663163449Component = new Component({
  name: 'app-8060181663163449',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8192158107224095Component,
App4495496576062331Component,
App3634947794914501Component,
App3110810724870133Component,
App5205238020908141Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
