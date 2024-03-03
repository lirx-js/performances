import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1442109479388753Component } from "./components/app-1442109479388753/app-1442109479388753.component";
import { App8541148125465615Component } from "./components/app-8541148125465615/app-8541148125465615.component";
import { App7472636491190853Component } from "./components/app-7472636491190853/app-7472636491190853.component";
import { App5955985297980573Component } from "./components/app-5955985297980573/app-5955985297980573.component";
import { App5375708733583003Component } from "./components/app-5375708733583003/app-5375708733583003.component";

// @ts-ignore
import html from './app-7521482539711003.component.html?raw';
// @ts-ignore
import style from './app-7521482539711003.component.scss?inline';

/**
 * COMPONENT: 'app-7521482539711003'
 */

export const App7521482539711003Component = new Component({
  name: 'app-7521482539711003',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1442109479388753Component,
App8541148125465615Component,
App7472636491190853Component,
App5955985297980573Component,
App5375708733583003Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
