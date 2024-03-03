import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5744869241168111Component } from "./components/app-5744869241168111/app-5744869241168111.component";
import { App3502802738999141Component } from "./components/app-3502802738999141/app-3502802738999141.component";
import { App43397163039977Component } from "./components/app-43397163039977/app-43397163039977.component";
import { App5552044091795559Component } from "./components/app-5552044091795559/app-5552044091795559.component";
import { App2425174591186403Component } from "./components/app-2425174591186403/app-2425174591186403.component";

// @ts-ignore
import html from './app-4615612280759605.component.html?raw';
// @ts-ignore
import style from './app-4615612280759605.component.scss?inline';

/**
 * COMPONENT: 'app-4615612280759605'
 */

export const App4615612280759605Component = new Component({
  name: 'app-4615612280759605',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5744869241168111Component,
App3502802738999141Component,
App43397163039977Component,
App5552044091795559Component,
App2425174591186403Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
