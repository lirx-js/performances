import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4797379194603541Component } from "./components/app-4797379194603541/app-4797379194603541.component";
import { App8918801005899457Component } from "./components/app-8918801005899457/app-8918801005899457.component";
import { App3650529007312187Component } from "./components/app-3650529007312187/app-3650529007312187.component";
import { App4349004297645041Component } from "./components/app-4349004297645041/app-4349004297645041.component";
import { App3211256077464277Component } from "./components/app-3211256077464277/app-3211256077464277.component";

// @ts-ignore
import html from './app-6833572343717011.component.html?raw';
// @ts-ignore
import style from './app-6833572343717011.component.scss?inline';

/**
 * COMPONENT: 'app-6833572343717011'
 */

export const App6833572343717011Component = new Component({
  name: 'app-6833572343717011',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4797379194603541Component,
App8918801005899457Component,
App3650529007312187Component,
App4349004297645041Component,
App3211256077464277Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
