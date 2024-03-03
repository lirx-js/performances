import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5374904553851701Component } from "./components/app-5374904553851701/app-5374904553851701.component";
import { App1588077108300521Component } from "./components/app-1588077108300521/app-1588077108300521.component";
import { App2231338096822147Component } from "./components/app-2231338096822147/app-2231338096822147.component";
import { App65730261673855Component } from "./components/app-65730261673855/app-65730261673855.component";
import { App994655516497033Component } from "./components/app-994655516497033/app-994655516497033.component";

// @ts-ignore
import html from './app-6554653317744229.component.html?raw';
// @ts-ignore
import style from './app-6554653317744229.component.scss?inline';

/**
 * COMPONENT: 'app-6554653317744229'
 */

export const App6554653317744229Component = new Component({
  name: 'app-6554653317744229',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5374904553851701Component,
App1588077108300521Component,
App2231338096822147Component,
App65730261673855Component,
App994655516497033Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
