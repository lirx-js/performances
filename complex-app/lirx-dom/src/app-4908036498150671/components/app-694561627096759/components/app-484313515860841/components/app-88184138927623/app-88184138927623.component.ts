import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4445678172779565Component } from "./components/app-4445678172779565/app-4445678172779565.component";
import { App2062072088190821Component } from "./components/app-2062072088190821/app-2062072088190821.component";
import { App6764894879192731Component } from "./components/app-6764894879192731/app-6764894879192731.component";
import { App4506352990869913Component } from "./components/app-4506352990869913/app-4506352990869913.component";
import { App2916292597713879Component } from "./components/app-2916292597713879/app-2916292597713879.component";

// @ts-ignore
import html from './app-88184138927623.component.html?raw';
// @ts-ignore
import style from './app-88184138927623.component.scss?inline';

/**
 * COMPONENT: 'app-88184138927623'
 */

export const App88184138927623Component = new Component({
  name: 'app-88184138927623',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4445678172779565Component,
App2062072088190821Component,
App6764894879192731Component,
App4506352990869913Component,
App2916292597713879Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
