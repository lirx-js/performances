import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2528836576821835Component } from "./components/app-2528836576821835/app-2528836576821835.component";
import { App4770263165647063Component } from "./components/app-4770263165647063/app-4770263165647063.component";
import { App3517603192848299Component } from "./components/app-3517603192848299/app-3517603192848299.component";
import { App3135951515515751Component } from "./components/app-3135951515515751/app-3135951515515751.component";
import { App8749630996657953Component } from "./components/app-8749630996657953/app-8749630996657953.component";

// @ts-ignore
import html from './app-8939878502740655.component.html?raw';
// @ts-ignore
import style from './app-8939878502740655.component.scss?inline';

/**
 * COMPONENT: 'app-8939878502740655'
 */

export const App8939878502740655Component = new Component({
  name: 'app-8939878502740655',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2528836576821835Component,
App4770263165647063Component,
App3517603192848299Component,
App3135951515515751Component,
App8749630996657953Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
