import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8754749218635377Component } from "./components/app-8754749218635377/app-8754749218635377.component";
import { App8098273684837067Component } from "./components/app-8098273684837067/app-8098273684837067.component";
import { App6898938166344953Component } from "./components/app-6898938166344953/app-6898938166344953.component";
import { App1808505574397857Component } from "./components/app-1808505574397857/app-1808505574397857.component";
import { App7170972141440405Component } from "./components/app-7170972141440405/app-7170972141440405.component";

// @ts-ignore
import html from './app-277717705700767.component.html?raw';
// @ts-ignore
import style from './app-277717705700767.component.scss?inline';

/**
 * COMPONENT: 'app-277717705700767'
 */

export const App277717705700767Component = new Component({
  name: 'app-277717705700767',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8754749218635377Component,
App8098273684837067Component,
App6898938166344953Component,
App1808505574397857Component,
App7170972141440405Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
