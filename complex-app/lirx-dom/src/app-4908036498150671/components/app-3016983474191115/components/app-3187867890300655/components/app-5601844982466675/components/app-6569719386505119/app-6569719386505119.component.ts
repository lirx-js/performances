import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2583914819474117Component } from "./components/app-2583914819474117/app-2583914819474117.component";
import { App1753008895854839Component } from "./components/app-1753008895854839/app-1753008895854839.component";
import { App698055042885465Component } from "./components/app-698055042885465/app-698055042885465.component";
import { App5484234856116935Component } from "./components/app-5484234856116935/app-5484234856116935.component";
import { App3753128057435535Component } from "./components/app-3753128057435535/app-3753128057435535.component";

// @ts-ignore
import html from './app-6569719386505119.component.html?raw';
// @ts-ignore
import style from './app-6569719386505119.component.scss?inline';

/**
 * COMPONENT: 'app-6569719386505119'
 */

export const App6569719386505119Component = new Component({
  name: 'app-6569719386505119',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2583914819474117Component,
App1753008895854839Component,
App698055042885465Component,
App5484234856116935Component,
App3753128057435535Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
