import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8385605551369801Component } from "./components/app-8385605551369801/app-8385605551369801.component";
import { App5882757395707787Component } from "./components/app-5882757395707787/app-5882757395707787.component";
import { App811377700246919Component } from "./components/app-811377700246919/app-811377700246919.component";
import { App7149929210510451Component } from "./components/app-7149929210510451/app-7149929210510451.component";
import { App7210439485549327Component } from "./components/app-7210439485549327/app-7210439485549327.component";

// @ts-ignore
import html from './app-4859301396093069.component.html?raw';
// @ts-ignore
import style from './app-4859301396093069.component.scss?inline';

/**
 * COMPONENT: 'app-4859301396093069'
 */

export const App4859301396093069Component = new Component({
  name: 'app-4859301396093069',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8385605551369801Component,
App5882757395707787Component,
App811377700246919Component,
App7149929210510451Component,
App7210439485549327Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
