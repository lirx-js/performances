import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4907470424135417Component } from "./components/app-4907470424135417/app-4907470424135417.component";
import { App3433025189459203Component } from "./components/app-3433025189459203/app-3433025189459203.component";
import { App7418254628968781Component } from "./components/app-7418254628968781/app-7418254628968781.component";
import { App3592655012637793Component } from "./components/app-3592655012637793/app-3592655012637793.component";
import { App6130333070020275Component } from "./components/app-6130333070020275/app-6130333070020275.component";

// @ts-ignore
import html from './app-767279409674901.component.html?raw';
// @ts-ignore
import style from './app-767279409674901.component.scss?inline';

/**
 * COMPONENT: 'app-767279409674901'
 */

export const App767279409674901Component = new Component({
  name: 'app-767279409674901',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4907470424135417Component,
App3433025189459203Component,
App7418254628968781Component,
App3592655012637793Component,
App6130333070020275Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
