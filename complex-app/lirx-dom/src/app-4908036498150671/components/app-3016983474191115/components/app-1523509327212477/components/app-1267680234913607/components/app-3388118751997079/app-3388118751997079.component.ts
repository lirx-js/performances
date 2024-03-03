import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4295071207525167Component } from "./components/app-4295071207525167/app-4295071207525167.component";
import { App128929658357021Component } from "./components/app-128929658357021/app-128929658357021.component";
import { App4727046374181029Component } from "./components/app-4727046374181029/app-4727046374181029.component";
import { App3857443173188271Component } from "./components/app-3857443173188271/app-3857443173188271.component";
import { App3865798620287535Component } from "./components/app-3865798620287535/app-3865798620287535.component";

// @ts-ignore
import html from './app-3388118751997079.component.html?raw';
// @ts-ignore
import style from './app-3388118751997079.component.scss?inline';

/**
 * COMPONENT: 'app-3388118751997079'
 */

export const App3388118751997079Component = new Component({
  name: 'app-3388118751997079',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4295071207525167Component,
App128929658357021Component,
App4727046374181029Component,
App3857443173188271Component,
App3865798620287535Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
