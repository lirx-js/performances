import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5273239988066383Component } from "./components/app-5273239988066383/app-5273239988066383.component";
import { App1750231911398551Component } from "./components/app-1750231911398551/app-1750231911398551.component";
import { App3507902492217961Component } from "./components/app-3507902492217961/app-3507902492217961.component";
import { App4089722780275335Component } from "./components/app-4089722780275335/app-4089722780275335.component";
import { App5622441326990401Component } from "./components/app-5622441326990401/app-5622441326990401.component";

// @ts-ignore
import html from './app-7636188886442995.component.html?raw';
// @ts-ignore
import style from './app-7636188886442995.component.scss?inline';

/**
 * COMPONENT: 'app-7636188886442995'
 */

export const App7636188886442995Component = new Component({
  name: 'app-7636188886442995',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5273239988066383Component,
App1750231911398551Component,
App3507902492217961Component,
App4089722780275335Component,
App5622441326990401Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
