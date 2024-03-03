import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1536363821022287Component } from "./components/app-1536363821022287/app-1536363821022287.component";
import { App1662227339876449Component } from "./components/app-1662227339876449/app-1662227339876449.component";
import { App6417995077218433Component } from "./components/app-6417995077218433/app-6417995077218433.component";
import { App7904357532396615Component } from "./components/app-7904357532396615/app-7904357532396615.component";
import { App1066292669098403Component } from "./components/app-1066292669098403/app-1066292669098403.component";

// @ts-ignore
import html from './app-7742875484369897.component.html?raw';
// @ts-ignore
import style from './app-7742875484369897.component.scss?inline';

/**
 * COMPONENT: 'app-7742875484369897'
 */

export const App7742875484369897Component = new Component({
  name: 'app-7742875484369897',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1536363821022287Component,
App1662227339876449Component,
App6417995077218433Component,
App7904357532396615Component,
App1066292669098403Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
