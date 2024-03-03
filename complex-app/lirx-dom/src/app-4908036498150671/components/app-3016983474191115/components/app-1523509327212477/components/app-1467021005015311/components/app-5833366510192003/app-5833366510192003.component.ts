import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2519688273880281Component } from "./components/app-2519688273880281/app-2519688273880281.component";
import { App5473311412085965Component } from "./components/app-5473311412085965/app-5473311412085965.component";
import { App2275243476259631Component } from "./components/app-2275243476259631/app-2275243476259631.component";
import { App2099340153976801Component } from "./components/app-2099340153976801/app-2099340153976801.component";
import { App8210639127778835Component } from "./components/app-8210639127778835/app-8210639127778835.component";

// @ts-ignore
import html from './app-5833366510192003.component.html?raw';
// @ts-ignore
import style from './app-5833366510192003.component.scss?inline';

/**
 * COMPONENT: 'app-5833366510192003'
 */

export const App5833366510192003Component = new Component({
  name: 'app-5833366510192003',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2519688273880281Component,
App5473311412085965Component,
App2275243476259631Component,
App2099340153976801Component,
App8210639127778835Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
