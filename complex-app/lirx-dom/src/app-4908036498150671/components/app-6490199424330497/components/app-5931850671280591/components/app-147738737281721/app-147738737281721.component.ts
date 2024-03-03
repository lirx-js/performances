import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1926065431437441Component } from "./components/app-1926065431437441/app-1926065431437441.component";
import { App722154828907363Component } from "./components/app-722154828907363/app-722154828907363.component";
import { App4198554591626865Component } from "./components/app-4198554591626865/app-4198554591626865.component";
import { App2910083852756189Component } from "./components/app-2910083852756189/app-2910083852756189.component";
import { App4088582898652957Component } from "./components/app-4088582898652957/app-4088582898652957.component";

// @ts-ignore
import html from './app-147738737281721.component.html?raw';
// @ts-ignore
import style from './app-147738737281721.component.scss?inline';

/**
 * COMPONENT: 'app-147738737281721'
 */

export const App147738737281721Component = new Component({
  name: 'app-147738737281721',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1926065431437441Component,
App722154828907363Component,
App4198554591626865Component,
App2910083852756189Component,
App4088582898652957Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
