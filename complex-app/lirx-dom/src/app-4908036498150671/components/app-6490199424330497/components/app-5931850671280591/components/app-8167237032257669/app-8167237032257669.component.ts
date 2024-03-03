import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4104917446691877Component } from "./components/app-4104917446691877/app-4104917446691877.component";
import { App5948125984517803Component } from "./components/app-5948125984517803/app-5948125984517803.component";
import { App3352320488741005Component } from "./components/app-3352320488741005/app-3352320488741005.component";
import { App4292923798174921Component } from "./components/app-4292923798174921/app-4292923798174921.component";
import { App6079753300527647Component } from "./components/app-6079753300527647/app-6079753300527647.component";

// @ts-ignore
import html from './app-8167237032257669.component.html?raw';
// @ts-ignore
import style from './app-8167237032257669.component.scss?inline';

/**
 * COMPONENT: 'app-8167237032257669'
 */

export const App8167237032257669Component = new Component({
  name: 'app-8167237032257669',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4104917446691877Component,
App5948125984517803Component,
App3352320488741005Component,
App4292923798174921Component,
App6079753300527647Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
