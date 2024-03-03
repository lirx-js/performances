import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7824247111601499Component } from "./components/app-7824247111601499/app-7824247111601499.component";
import { App7672571161912145Component } from "./components/app-7672571161912145/app-7672571161912145.component";
import { App3714094905396497Component } from "./components/app-3714094905396497/app-3714094905396497.component";
import { App6976208498984227Component } from "./components/app-6976208498984227/app-6976208498984227.component";
import { App687622906221221Component } from "./components/app-687622906221221/app-687622906221221.component";

// @ts-ignore
import html from './app-6686553174960777.component.html?raw';
// @ts-ignore
import style from './app-6686553174960777.component.scss?inline';

/**
 * COMPONENT: 'app-6686553174960777'
 */

export const App6686553174960777Component = new Component({
  name: 'app-6686553174960777',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7824247111601499Component,
App7672571161912145Component,
App3714094905396497Component,
App6976208498984227Component,
App687622906221221Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
