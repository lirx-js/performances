import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4826632175261303Component } from "./components/app-4826632175261303/app-4826632175261303.component";
import { App3101307176896917Component } from "./components/app-3101307176896917/app-3101307176896917.component";
import { App6740998879673697Component } from "./components/app-6740998879673697/app-6740998879673697.component";
import { App4807167307989963Component } from "./components/app-4807167307989963/app-4807167307989963.component";
import { App154016668827893Component } from "./components/app-154016668827893/app-154016668827893.component";

// @ts-ignore
import html from './app-6313893222970531.component.html?raw';
// @ts-ignore
import style from './app-6313893222970531.component.scss?inline';

/**
 * COMPONENT: 'app-6313893222970531'
 */

export const App6313893222970531Component = new Component({
  name: 'app-6313893222970531',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4826632175261303Component,
App3101307176896917Component,
App6740998879673697Component,
App4807167307989963Component,
App154016668827893Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
