import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8139021200497865Component } from "./components/app-8139021200497865/app-8139021200497865.component";
import { App4816424407417947Component } from "./components/app-4816424407417947/app-4816424407417947.component";
import { App8639382655800095Component } from "./components/app-8639382655800095/app-8639382655800095.component";
import { App7471496745602509Component } from "./components/app-7471496745602509/app-7471496745602509.component";
import { App3211671789997403Component } from "./components/app-3211671789997403/app-3211671789997403.component";

// @ts-ignore
import html from './app-8009459886759241.component.html?raw';
// @ts-ignore
import style from './app-8009459886759241.component.scss?inline';

/**
 * COMPONENT: 'app-8009459886759241'
 */

export const App8009459886759241Component = new Component({
  name: 'app-8009459886759241',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8139021200497865Component,
App4816424407417947Component,
App8639382655800095Component,
App7471496745602509Component,
App3211671789997403Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
