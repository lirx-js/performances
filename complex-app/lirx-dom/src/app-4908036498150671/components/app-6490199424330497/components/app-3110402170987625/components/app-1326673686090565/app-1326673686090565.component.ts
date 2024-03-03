import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6562869035599677Component } from "./components/app-6562869035599677/app-6562869035599677.component";
import { App1574021876877169Component } from "./components/app-1574021876877169/app-1574021876877169.component";
import { App4017485949815543Component } from "./components/app-4017485949815543/app-4017485949815543.component";
import { App7651466976839119Component } from "./components/app-7651466976839119/app-7651466976839119.component";
import { App4921079530252127Component } from "./components/app-4921079530252127/app-4921079530252127.component";

// @ts-ignore
import html from './app-1326673686090565.component.html?raw';
// @ts-ignore
import style from './app-1326673686090565.component.scss?inline';

/**
 * COMPONENT: 'app-1326673686090565'
 */

export const App1326673686090565Component = new Component({
  name: 'app-1326673686090565',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6562869035599677Component,
App1574021876877169Component,
App4017485949815543Component,
App7651466976839119Component,
App4921079530252127Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
