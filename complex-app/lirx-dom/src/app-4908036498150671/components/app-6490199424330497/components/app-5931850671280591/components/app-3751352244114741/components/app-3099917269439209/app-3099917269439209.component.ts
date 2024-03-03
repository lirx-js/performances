import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6735184100215363Component } from "./components/app-6735184100215363/app-6735184100215363.component";
import { App254376821335195Component } from "./components/app-254376821335195/app-254376821335195.component";
import { App7628482945333555Component } from "./components/app-7628482945333555/app-7628482945333555.component";
import { App8598614903506339Component } from "./components/app-8598614903506339/app-8598614903506339.component";
import { App6040657320151805Component } from "./components/app-6040657320151805/app-6040657320151805.component";

// @ts-ignore
import html from './app-3099917269439209.component.html?raw';
// @ts-ignore
import style from './app-3099917269439209.component.scss?inline';

/**
 * COMPONENT: 'app-3099917269439209'
 */

export const App3099917269439209Component = new Component({
  name: 'app-3099917269439209',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6735184100215363Component,
App254376821335195Component,
App7628482945333555Component,
App8598614903506339Component,
App6040657320151805Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
