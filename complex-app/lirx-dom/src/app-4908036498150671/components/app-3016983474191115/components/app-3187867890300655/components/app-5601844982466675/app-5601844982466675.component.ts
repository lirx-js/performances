import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2079326901879641Component } from "./components/app-2079326901879641/app-2079326901879641.component";
import { App8461962732004553Component } from "./components/app-8461962732004553/app-8461962732004553.component";
import { App5654790480909681Component } from "./components/app-5654790480909681/app-5654790480909681.component";
import { App6569719386505119Component } from "./components/app-6569719386505119/app-6569719386505119.component";
import { App601367229553395Component } from "./components/app-601367229553395/app-601367229553395.component";

// @ts-ignore
import html from './app-5601844982466675.component.html?raw';
// @ts-ignore
import style from './app-5601844982466675.component.scss?inline';

/**
 * COMPONENT: 'app-5601844982466675'
 */

export const App5601844982466675Component = new Component({
  name: 'app-5601844982466675',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2079326901879641Component,
App8461962732004553Component,
App5654790480909681Component,
App6569719386505119Component,
App601367229553395Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
