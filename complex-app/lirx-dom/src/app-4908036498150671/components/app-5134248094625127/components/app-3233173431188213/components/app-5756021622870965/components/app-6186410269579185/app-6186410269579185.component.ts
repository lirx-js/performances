import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4480308132250711Component } from "./components/app-4480308132250711/app-4480308132250711.component";
import { App7476841220730971Component } from "./components/app-7476841220730971/app-7476841220730971.component";
import { App7749700977779521Component } from "./components/app-7749700977779521/app-7749700977779521.component";
import { App6251717592816623Component } from "./components/app-6251717592816623/app-6251717592816623.component";
import { App8828652728902937Component } from "./components/app-8828652728902937/app-8828652728902937.component";

// @ts-ignore
import html from './app-6186410269579185.component.html?raw';
// @ts-ignore
import style from './app-6186410269579185.component.scss?inline';

/**
 * COMPONENT: 'app-6186410269579185'
 */

export const App6186410269579185Component = new Component({
  name: 'app-6186410269579185',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4480308132250711Component,
App7476841220730971Component,
App7749700977779521Component,
App6251717592816623Component,
App8828652728902937Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
