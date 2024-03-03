import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2597317474578273Component } from "./components/app-2597317474578273/app-2597317474578273.component";
import { App8790296150293913Component } from "./components/app-8790296150293913/app-8790296150293913.component";
import { App3147541992195285Component } from "./components/app-3147541992195285/app-3147541992195285.component";
import { App7058633159322829Component } from "./components/app-7058633159322829/app-7058633159322829.component";
import { App8378984588089037Component } from "./components/app-8378984588089037/app-8378984588089037.component";

// @ts-ignore
import html from './app-4997932729105469.component.html?raw';
// @ts-ignore
import style from './app-4997932729105469.component.scss?inline';

/**
 * COMPONENT: 'app-4997932729105469'
 */

export const App4997932729105469Component = new Component({
  name: 'app-4997932729105469',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2597317474578273Component,
App8790296150293913Component,
App3147541992195285Component,
App7058633159322829Component,
App8378984588089037Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
