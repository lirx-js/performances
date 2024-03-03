import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1029187121220211Component } from "./components/app-1029187121220211/app-1029187121220211.component";
import { App5265539551288335Component } from "./components/app-5265539551288335/app-5265539551288335.component";
import { App3886363328163985Component } from "./components/app-3886363328163985/app-3886363328163985.component";
import { App4278762930940961Component } from "./components/app-4278762930940961/app-4278762930940961.component";
import { App1111868284091979Component } from "./components/app-1111868284091979/app-1111868284091979.component";

// @ts-ignore
import html from './app-2916292597713879.component.html?raw';
// @ts-ignore
import style from './app-2916292597713879.component.scss?inline';

/**
 * COMPONENT: 'app-2916292597713879'
 */

export const App2916292597713879Component = new Component({
  name: 'app-2916292597713879',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1029187121220211Component,
App5265539551288335Component,
App3886363328163985Component,
App4278762930940961Component,
App1111868284091979Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
