import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2990945532132245Component } from "./components/app-2990945532132245/app-2990945532132245.component";
import { App5839557360692697Component } from "./components/app-5839557360692697/app-5839557360692697.component";
import { App8335777795411019Component } from "./components/app-8335777795411019/app-8335777795411019.component";
import { App1230781802870187Component } from "./components/app-1230781802870187/app-1230781802870187.component";
import { App3561303639714667Component } from "./components/app-3561303639714667/app-3561303639714667.component";

// @ts-ignore
import html from './app-2683727142800651.component.html?raw';
// @ts-ignore
import style from './app-2683727142800651.component.scss?inline';

/**
 * COMPONENT: 'app-2683727142800651'
 */

export const App2683727142800651Component = new Component({
  name: 'app-2683727142800651',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2990945532132245Component,
App5839557360692697Component,
App8335777795411019Component,
App1230781802870187Component,
App3561303639714667Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
