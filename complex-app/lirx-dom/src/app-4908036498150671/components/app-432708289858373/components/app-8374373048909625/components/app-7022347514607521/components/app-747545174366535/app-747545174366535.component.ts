import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7754550630104551Component } from "./components/app-7754550630104551/app-7754550630104551.component";
import { App5158515952968915Component } from "./components/app-5158515952968915/app-5158515952968915.component";
import { App7741690978516787Component } from "./components/app-7741690978516787/app-7741690978516787.component";
import { App4085427898291365Component } from "./components/app-4085427898291365/app-4085427898291365.component";
import { App5788287749166293Component } from "./components/app-5788287749166293/app-5788287749166293.component";

// @ts-ignore
import html from './app-747545174366535.component.html?raw';
// @ts-ignore
import style from './app-747545174366535.component.scss?inline';

/**
 * COMPONENT: 'app-747545174366535'
 */

export const App747545174366535Component = new Component({
  name: 'app-747545174366535',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7754550630104551Component,
App5158515952968915Component,
App7741690978516787Component,
App4085427898291365Component,
App5788287749166293Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
