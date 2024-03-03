import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1236173254417419Component } from "./components/app-1236173254417419/app-1236173254417419.component";
import { App6709616070794985Component } from "./components/app-6709616070794985/app-6709616070794985.component";
import { App8433345931777905Component } from "./components/app-8433345931777905/app-8433345931777905.component";
import { App5735183588303897Component } from "./components/app-5735183588303897/app-5735183588303897.component";
import { App4613182782981655Component } from "./components/app-4613182782981655/app-4613182782981655.component";

// @ts-ignore
import html from './app-4098280209766333.component.html?raw';
// @ts-ignore
import style from './app-4098280209766333.component.scss?inline';

/**
 * COMPONENT: 'app-4098280209766333'
 */

export const App4098280209766333Component = new Component({
  name: 'app-4098280209766333',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1236173254417419Component,
App6709616070794985Component,
App8433345931777905Component,
App5735183588303897Component,
App4613182782981655Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
