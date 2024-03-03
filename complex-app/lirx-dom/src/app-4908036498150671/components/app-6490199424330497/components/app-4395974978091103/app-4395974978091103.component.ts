import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6938245869674965Component } from "./components/app-6938245869674965/app-6938245869674965.component";
import { App142024238373631Component } from "./components/app-142024238373631/app-142024238373631.component";
import { App6238789231523865Component } from "./components/app-6238789231523865/app-6238789231523865.component";
import { App1695195584473129Component } from "./components/app-1695195584473129/app-1695195584473129.component";
import { App2076812873144473Component } from "./components/app-2076812873144473/app-2076812873144473.component";

// @ts-ignore
import html from './app-4395974978091103.component.html?raw';
// @ts-ignore
import style from './app-4395974978091103.component.scss?inline';

/**
 * COMPONENT: 'app-4395974978091103'
 */

export const App4395974978091103Component = new Component({
  name: 'app-4395974978091103',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6938245869674965Component,
App142024238373631Component,
App6238789231523865Component,
App1695195584473129Component,
App2076812873144473Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
