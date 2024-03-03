import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3975407363707641Component } from "./components/app-3975407363707641/app-3975407363707641.component";
import { App1708372109330549Component } from "./components/app-1708372109330549/app-1708372109330549.component";
import { App2201758608149051Component } from "./components/app-2201758608149051/app-2201758608149051.component";
import { App5699199001277159Component } from "./components/app-5699199001277159/app-5699199001277159.component";
import { App8787537877946939Component } from "./components/app-8787537877946939/app-8787537877946939.component";

// @ts-ignore
import html from './app-6845640358060031.component.html?raw';
// @ts-ignore
import style from './app-6845640358060031.component.scss?inline';

/**
 * COMPONENT: 'app-6845640358060031'
 */

export const App6845640358060031Component = new Component({
  name: 'app-6845640358060031',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3975407363707641Component,
App1708372109330549Component,
App2201758608149051Component,
App5699199001277159Component,
App8787537877946939Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
