import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8311928214462387Component } from "./components/app-8311928214462387/app-8311928214462387.component";
import { App3912711668036061Component } from "./components/app-3912711668036061/app-3912711668036061.component";
import { App6414640180779157Component } from "./components/app-6414640180779157/app-6414640180779157.component";
import { App3096004151117215Component } from "./components/app-3096004151117215/app-3096004151117215.component";
import { App5713048744252747Component } from "./components/app-5713048744252747/app-5713048744252747.component";

// @ts-ignore
import html from './app-1947535402567331.component.html?raw';
// @ts-ignore
import style from './app-1947535402567331.component.scss?inline';

/**
 * COMPONENT: 'app-1947535402567331'
 */

export const App1947535402567331Component = new Component({
  name: 'app-1947535402567331',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8311928214462387Component,
App3912711668036061Component,
App6414640180779157Component,
App3096004151117215Component,
App5713048744252747Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
