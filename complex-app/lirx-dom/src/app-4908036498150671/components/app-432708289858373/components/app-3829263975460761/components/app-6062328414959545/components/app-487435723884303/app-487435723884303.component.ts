import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7125749500177079Component } from "./components/app-7125749500177079/app-7125749500177079.component";
import { App8930785691268759Component } from "./components/app-8930785691268759/app-8930785691268759.component";
import { App5850156457616593Component } from "./components/app-5850156457616593/app-5850156457616593.component";
import { App3880348558951719Component } from "./components/app-3880348558951719/app-3880348558951719.component";
import { App5004912799577179Component } from "./components/app-5004912799577179/app-5004912799577179.component";

// @ts-ignore
import html from './app-487435723884303.component.html?raw';
// @ts-ignore
import style from './app-487435723884303.component.scss?inline';

/**
 * COMPONENT: 'app-487435723884303'
 */

export const App487435723884303Component = new Component({
  name: 'app-487435723884303',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7125749500177079Component,
App8930785691268759Component,
App5850156457616593Component,
App3880348558951719Component,
App5004912799577179Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
