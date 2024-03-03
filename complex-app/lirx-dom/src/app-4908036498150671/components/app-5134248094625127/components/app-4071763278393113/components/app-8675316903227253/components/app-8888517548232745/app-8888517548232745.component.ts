import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7384573939638385Component } from "./components/app-7384573939638385/app-7384573939638385.component";
import { App7845338609023853Component } from "./components/app-7845338609023853/app-7845338609023853.component";
import { App1781759925543227Component } from "./components/app-1781759925543227/app-1781759925543227.component";
import { App2398161194561977Component } from "./components/app-2398161194561977/app-2398161194561977.component";
import { App3893449158365201Component } from "./components/app-3893449158365201/app-3893449158365201.component";

// @ts-ignore
import html from './app-8888517548232745.component.html?raw';
// @ts-ignore
import style from './app-8888517548232745.component.scss?inline';

/**
 * COMPONENT: 'app-8888517548232745'
 */

export const App8888517548232745Component = new Component({
  name: 'app-8888517548232745',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7384573939638385Component,
App7845338609023853Component,
App1781759925543227Component,
App2398161194561977Component,
App3893449158365201Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
