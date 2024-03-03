import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7474479834531155Component } from "./components/app-7474479834531155/app-7474479834531155.component";
import { App7176629146094235Component } from "./components/app-7176629146094235/app-7176629146094235.component";
import { App1287257780668503Component } from "./components/app-1287257780668503/app-1287257780668503.component";
import { App2372266851600759Component } from "./components/app-2372266851600759/app-2372266851600759.component";
import { App59835765913857Component } from "./components/app-59835765913857/app-59835765913857.component";

// @ts-ignore
import html from './app-5782222502170677.component.html?raw';
// @ts-ignore
import style from './app-5782222502170677.component.scss?inline';

/**
 * COMPONENT: 'app-5782222502170677'
 */

export const App5782222502170677Component = new Component({
  name: 'app-5782222502170677',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7474479834531155Component,
App7176629146094235Component,
App1287257780668503Component,
App2372266851600759Component,
App59835765913857Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
