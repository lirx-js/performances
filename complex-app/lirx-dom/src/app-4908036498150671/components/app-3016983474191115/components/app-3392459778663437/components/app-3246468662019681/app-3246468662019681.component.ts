import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6078540411962027Component } from "./components/app-6078540411962027/app-6078540411962027.component";
import { App2810047644124885Component } from "./components/app-2810047644124885/app-2810047644124885.component";
import { App7002839027960591Component } from "./components/app-7002839027960591/app-7002839027960591.component";
import { App1759945844328359Component } from "./components/app-1759945844328359/app-1759945844328359.component";
import { App8340227333173159Component } from "./components/app-8340227333173159/app-8340227333173159.component";

// @ts-ignore
import html from './app-3246468662019681.component.html?raw';
// @ts-ignore
import style from './app-3246468662019681.component.scss?inline';

/**
 * COMPONENT: 'app-3246468662019681'
 */

export const App3246468662019681Component = new Component({
  name: 'app-3246468662019681',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6078540411962027Component,
App2810047644124885Component,
App7002839027960591Component,
App1759945844328359Component,
App8340227333173159Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
