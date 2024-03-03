import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2726168063997223Component } from "./components/app-2726168063997223/app-2726168063997223.component";
import { App4896110682405465Component } from "./components/app-4896110682405465/app-4896110682405465.component";
import { App6975527252874775Component } from "./components/app-6975527252874775/app-6975527252874775.component";
import { App8502072164004937Component } from "./components/app-8502072164004937/app-8502072164004937.component";
import { App3039837600885915Component } from "./components/app-3039837600885915/app-3039837600885915.component";

// @ts-ignore
import html from './app-6134316839579415.component.html?raw';
// @ts-ignore
import style from './app-6134316839579415.component.scss?inline';

/**
 * COMPONENT: 'app-6134316839579415'
 */

export const App6134316839579415Component = new Component({
  name: 'app-6134316839579415',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2726168063997223Component,
App4896110682405465Component,
App6975527252874775Component,
App8502072164004937Component,
App3039837600885915Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
