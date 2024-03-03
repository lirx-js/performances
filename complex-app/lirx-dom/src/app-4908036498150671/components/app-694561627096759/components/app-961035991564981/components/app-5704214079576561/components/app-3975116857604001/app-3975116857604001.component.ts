import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8124404015434925Component } from "./components/app-8124404015434925/app-8124404015434925.component";
import { App6343399478527801Component } from "./components/app-6343399478527801/app-6343399478527801.component";
import { App5433297680445891Component } from "./components/app-5433297680445891/app-5433297680445891.component";
import { App6100849123191671Component } from "./components/app-6100849123191671/app-6100849123191671.component";
import { App5329124153353501Component } from "./components/app-5329124153353501/app-5329124153353501.component";

// @ts-ignore
import html from './app-3975116857604001.component.html?raw';
// @ts-ignore
import style from './app-3975116857604001.component.scss?inline';

/**
 * COMPONENT: 'app-3975116857604001'
 */

export const App3975116857604001Component = new Component({
  name: 'app-3975116857604001',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8124404015434925Component,
App6343399478527801Component,
App5433297680445891Component,
App6100849123191671Component,
App5329124153353501Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
