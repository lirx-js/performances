import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4604078498182913Component } from "./components/app-4604078498182913/app-4604078498182913.component";
import { App2477468939947617Component } from "./components/app-2477468939947617/app-2477468939947617.component";
import { App7885553666825725Component } from "./components/app-7885553666825725/app-7885553666825725.component";
import { App8804502955268251Component } from "./components/app-8804502955268251/app-8804502955268251.component";
import { App8387528840192267Component } from "./components/app-8387528840192267/app-8387528840192267.component";

// @ts-ignore
import html from './app-171057448935799.component.html?raw';
// @ts-ignore
import style from './app-171057448935799.component.scss?inline';

/**
 * COMPONENT: 'app-171057448935799'
 */

export const App171057448935799Component = new Component({
  name: 'app-171057448935799',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4604078498182913Component,
App2477468939947617Component,
App7885553666825725Component,
App8804502955268251Component,
App8387528840192267Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
