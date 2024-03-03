import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2183349256288941Component } from "./components/app-2183349256288941/app-2183349256288941.component";
import { App5211729078350111Component } from "./components/app-5211729078350111/app-5211729078350111.component";
import { App4341710302935651Component } from "./components/app-4341710302935651/app-4341710302935651.component";
import { App4921439164138571Component } from "./components/app-4921439164138571/app-4921439164138571.component";
import { App4837808724148221Component } from "./components/app-4837808724148221/app-4837808724148221.component";

// @ts-ignore
import html from './app-3224912357245479.component.html?raw';
// @ts-ignore
import style from './app-3224912357245479.component.scss?inline';

/**
 * COMPONENT: 'app-3224912357245479'
 */

export const App3224912357245479Component = new Component({
  name: 'app-3224912357245479',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2183349256288941Component,
App5211729078350111Component,
App4341710302935651Component,
App4921439164138571Component,
App4837808724148221Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
