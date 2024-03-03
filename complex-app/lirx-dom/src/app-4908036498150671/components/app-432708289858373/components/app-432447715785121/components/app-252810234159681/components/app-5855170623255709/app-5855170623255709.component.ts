import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7297696432643885Component } from "./components/app-7297696432643885/app-7297696432643885.component";
import { App8287774526620175Component } from "./components/app-8287774526620175/app-8287774526620175.component";
import { App3204308132540377Component } from "./components/app-3204308132540377/app-3204308132540377.component";
import { App353199565677747Component } from "./components/app-353199565677747/app-353199565677747.component";
import { App3706287503398363Component } from "./components/app-3706287503398363/app-3706287503398363.component";

// @ts-ignore
import html from './app-5855170623255709.component.html?raw';
// @ts-ignore
import style from './app-5855170623255709.component.scss?inline';

/**
 * COMPONENT: 'app-5855170623255709'
 */

export const App5855170623255709Component = new Component({
  name: 'app-5855170623255709',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7297696432643885Component,
App8287774526620175Component,
App3204308132540377Component,
App353199565677747Component,
App3706287503398363Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
