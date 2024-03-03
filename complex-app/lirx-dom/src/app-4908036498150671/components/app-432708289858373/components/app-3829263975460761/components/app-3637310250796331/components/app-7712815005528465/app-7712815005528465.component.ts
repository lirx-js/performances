import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4681019245529127Component } from "./components/app-4681019245529127/app-4681019245529127.component";
import { App5598101985941119Component } from "./components/app-5598101985941119/app-5598101985941119.component";
import { App7517528300328125Component } from "./components/app-7517528300328125/app-7517528300328125.component";
import { App46316675750521Component } from "./components/app-46316675750521/app-46316675750521.component";
import { App8382283795981385Component } from "./components/app-8382283795981385/app-8382283795981385.component";

// @ts-ignore
import html from './app-7712815005528465.component.html?raw';
// @ts-ignore
import style from './app-7712815005528465.component.scss?inline';

/**
 * COMPONENT: 'app-7712815005528465'
 */

export const App7712815005528465Component = new Component({
  name: 'app-7712815005528465',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4681019245529127Component,
App5598101985941119Component,
App7517528300328125Component,
App46316675750521Component,
App8382283795981385Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
