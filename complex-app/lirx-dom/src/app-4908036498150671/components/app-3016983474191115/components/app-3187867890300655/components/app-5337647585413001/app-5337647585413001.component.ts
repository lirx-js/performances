import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5790848423896497Component } from "./components/app-5790848423896497/app-5790848423896497.component";
import { App1718602302133239Component } from "./components/app-1718602302133239/app-1718602302133239.component";
import { App5108830280487813Component } from "./components/app-5108830280487813/app-5108830280487813.component";
import { App4357776694600717Component } from "./components/app-4357776694600717/app-4357776694600717.component";
import { App1803444696300183Component } from "./components/app-1803444696300183/app-1803444696300183.component";

// @ts-ignore
import html from './app-5337647585413001.component.html?raw';
// @ts-ignore
import style from './app-5337647585413001.component.scss?inline';

/**
 * COMPONENT: 'app-5337647585413001'
 */

export const App5337647585413001Component = new Component({
  name: 'app-5337647585413001',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5790848423896497Component,
App1718602302133239Component,
App5108830280487813Component,
App4357776694600717Component,
App1803444696300183Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
