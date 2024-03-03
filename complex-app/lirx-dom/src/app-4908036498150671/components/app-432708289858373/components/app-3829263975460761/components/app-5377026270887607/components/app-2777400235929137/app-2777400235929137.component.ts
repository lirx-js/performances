import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1561126099713535Component } from "./components/app-1561126099713535/app-1561126099713535.component";
import { App2488655600254715Component } from "./components/app-2488655600254715/app-2488655600254715.component";
import { App5982665840465877Component } from "./components/app-5982665840465877/app-5982665840465877.component";
import { App7673084931337843Component } from "./components/app-7673084931337843/app-7673084931337843.component";
import { App8478075930717363Component } from "./components/app-8478075930717363/app-8478075930717363.component";

// @ts-ignore
import html from './app-2777400235929137.component.html?raw';
// @ts-ignore
import style from './app-2777400235929137.component.scss?inline';

/**
 * COMPONENT: 'app-2777400235929137'
 */

export const App2777400235929137Component = new Component({
  name: 'app-2777400235929137',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1561126099713535Component,
App2488655600254715Component,
App5982665840465877Component,
App7673084931337843Component,
App8478075930717363Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
