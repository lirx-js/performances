import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4615878366540405Component } from "./components/app-4615878366540405/app-4615878366540405.component";
import { App7803259544925319Component } from "./components/app-7803259544925319/app-7803259544925319.component";
import { App8872456076188859Component } from "./components/app-8872456076188859/app-8872456076188859.component";
import { App6199004219245767Component } from "./components/app-6199004219245767/app-6199004219245767.component";
import { App5293469725475197Component } from "./components/app-5293469725475197/app-5293469725475197.component";

// @ts-ignore
import html from './app-5487541535820653.component.html?raw';
// @ts-ignore
import style from './app-5487541535820653.component.scss?inline';

/**
 * COMPONENT: 'app-5487541535820653'
 */

export const App5487541535820653Component = new Component({
  name: 'app-5487541535820653',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4615878366540405Component,
App7803259544925319Component,
App8872456076188859Component,
App6199004219245767Component,
App5293469725475197Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
