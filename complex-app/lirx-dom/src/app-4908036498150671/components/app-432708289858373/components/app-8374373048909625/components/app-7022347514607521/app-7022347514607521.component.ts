import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App747545174366535Component } from "./components/app-747545174366535/app-747545174366535.component";
import { App574177806645857Component } from "./components/app-574177806645857/app-574177806645857.component";
import { App5961419530789951Component } from "./components/app-5961419530789951/app-5961419530789951.component";
import { App1890147327758541Component } from "./components/app-1890147327758541/app-1890147327758541.component";
import { App2279609579364461Component } from "./components/app-2279609579364461/app-2279609579364461.component";

// @ts-ignore
import html from './app-7022347514607521.component.html?raw';
// @ts-ignore
import style from './app-7022347514607521.component.scss?inline';

/**
 * COMPONENT: 'app-7022347514607521'
 */

export const App7022347514607521Component = new Component({
  name: 'app-7022347514607521',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App747545174366535Component,
App574177806645857Component,
App5961419530789951Component,
App1890147327758541Component,
App2279609579364461Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
