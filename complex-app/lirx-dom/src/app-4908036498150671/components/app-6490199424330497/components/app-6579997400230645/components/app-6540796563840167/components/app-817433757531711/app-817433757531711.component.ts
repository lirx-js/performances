import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App278459386672761Component } from "./components/app-278459386672761/app-278459386672761.component";
import { App8257522353323749Component } from "./components/app-8257522353323749/app-8257522353323749.component";
import { App3039848714712515Component } from "./components/app-3039848714712515/app-3039848714712515.component";
import { App7616434505714315Component } from "./components/app-7616434505714315/app-7616434505714315.component";
import { App20077422563813Component } from "./components/app-20077422563813/app-20077422563813.component";

// @ts-ignore
import html from './app-817433757531711.component.html?raw';
// @ts-ignore
import style from './app-817433757531711.component.scss?inline';

/**
 * COMPONENT: 'app-817433757531711'
 */

export const App817433757531711Component = new Component({
  name: 'app-817433757531711',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App278459386672761Component,
App8257522353323749Component,
App3039848714712515Component,
App7616434505714315Component,
App20077422563813Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
