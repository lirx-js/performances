import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4198041440010627Component } from "./components/app-4198041440010627/app-4198041440010627.component";
import { App5993034351897515Component } from "./components/app-5993034351897515/app-5993034351897515.component";
import { App3111745167906205Component } from "./components/app-3111745167906205/app-3111745167906205.component";
import { App124514263047275Component } from "./components/app-124514263047275/app-124514263047275.component";
import { App7414406913783551Component } from "./components/app-7414406913783551/app-7414406913783551.component";

// @ts-ignore
import html from './app-8573197661762289.component.html?raw';
// @ts-ignore
import style from './app-8573197661762289.component.scss?inline';

/**
 * COMPONENT: 'app-8573197661762289'
 */

export const App8573197661762289Component = new Component({
  name: 'app-8573197661762289',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4198041440010627Component,
App5993034351897515Component,
App3111745167906205Component,
App124514263047275Component,
App7414406913783551Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
