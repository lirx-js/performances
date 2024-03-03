import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3200041480123837Component } from "./components/app-3200041480123837/app-3200041480123837.component";
import { App3707552459958225Component } from "./components/app-3707552459958225/app-3707552459958225.component";
import { App958219185148717Component } from "./components/app-958219185148717/app-958219185148717.component";
import { App8453785748264125Component } from "./components/app-8453785748264125/app-8453785748264125.component";
import { App2852601022079463Component } from "./components/app-2852601022079463/app-2852601022079463.component";

// @ts-ignore
import html from './app-4463767251809769.component.html?raw';
// @ts-ignore
import style from './app-4463767251809769.component.scss?inline';

/**
 * COMPONENT: 'app-4463767251809769'
 */

export const App4463767251809769Component = new Component({
  name: 'app-4463767251809769',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3200041480123837Component,
App3707552459958225Component,
App958219185148717Component,
App8453785748264125Component,
App2852601022079463Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
