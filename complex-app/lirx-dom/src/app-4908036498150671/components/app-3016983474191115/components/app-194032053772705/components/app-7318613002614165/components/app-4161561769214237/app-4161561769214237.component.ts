import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7589843662882747Component } from "./components/app-7589843662882747/app-7589843662882747.component";
import { App3466042648865719Component } from "./components/app-3466042648865719/app-3466042648865719.component";
import { App60444905606595Component } from "./components/app-60444905606595/app-60444905606595.component";
import { App1899784658157429Component } from "./components/app-1899784658157429/app-1899784658157429.component";
import { App125408984324703Component } from "./components/app-125408984324703/app-125408984324703.component";

// @ts-ignore
import html from './app-4161561769214237.component.html?raw';
// @ts-ignore
import style from './app-4161561769214237.component.scss?inline';

/**
 * COMPONENT: 'app-4161561769214237'
 */

export const App4161561769214237Component = new Component({
  name: 'app-4161561769214237',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7589843662882747Component,
App3466042648865719Component,
App60444905606595Component,
App1899784658157429Component,
App125408984324703Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
