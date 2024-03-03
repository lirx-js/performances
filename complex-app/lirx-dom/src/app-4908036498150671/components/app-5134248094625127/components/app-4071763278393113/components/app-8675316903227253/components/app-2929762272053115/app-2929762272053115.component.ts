import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2441539088931649Component } from "./components/app-2441539088931649/app-2441539088931649.component";
import { App750185845915809Component } from "./components/app-750185845915809/app-750185845915809.component";
import { App6968213553194991Component } from "./components/app-6968213553194991/app-6968213553194991.component";
import { App4335947358969719Component } from "./components/app-4335947358969719/app-4335947358969719.component";
import { App1515746128111219Component } from "./components/app-1515746128111219/app-1515746128111219.component";

// @ts-ignore
import html from './app-2929762272053115.component.html?raw';
// @ts-ignore
import style from './app-2929762272053115.component.scss?inline';

/**
 * COMPONENT: 'app-2929762272053115'
 */

export const App2929762272053115Component = new Component({
  name: 'app-2929762272053115',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2441539088931649Component,
App750185845915809Component,
App6968213553194991Component,
App4335947358969719Component,
App1515746128111219Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
