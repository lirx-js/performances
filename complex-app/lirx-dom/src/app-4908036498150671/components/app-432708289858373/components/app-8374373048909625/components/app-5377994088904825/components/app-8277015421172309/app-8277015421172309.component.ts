import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4810689283482985Component } from "./components/app-4810689283482985/app-4810689283482985.component";
import { App8095903317953245Component } from "./components/app-8095903317953245/app-8095903317953245.component";
import { App2059291142460143Component } from "./components/app-2059291142460143/app-2059291142460143.component";
import { App1340270291614851Component } from "./components/app-1340270291614851/app-1340270291614851.component";
import { App613067985457727Component } from "./components/app-613067985457727/app-613067985457727.component";

// @ts-ignore
import html from './app-8277015421172309.component.html?raw';
// @ts-ignore
import style from './app-8277015421172309.component.scss?inline';

/**
 * COMPONENT: 'app-8277015421172309'
 */

export const App8277015421172309Component = new Component({
  name: 'app-8277015421172309',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4810689283482985Component,
App8095903317953245Component,
App2059291142460143Component,
App1340270291614851Component,
App613067985457727Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
