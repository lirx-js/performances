import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8799664466718325Component } from "./components/app-8799664466718325/app-8799664466718325.component";
import { App1911665544523923Component } from "./components/app-1911665544523923/app-1911665544523923.component";
import { App1991427038201925Component } from "./components/app-1991427038201925/app-1991427038201925.component";
import { App6742985582199897Component } from "./components/app-6742985582199897/app-6742985582199897.component";
import { App5704118304285403Component } from "./components/app-5704118304285403/app-5704118304285403.component";

// @ts-ignore
import html from './app-4876774809595069.component.html?raw';
// @ts-ignore
import style from './app-4876774809595069.component.scss?inline';

/**
 * COMPONENT: 'app-4876774809595069'
 */

export const App4876774809595069Component = new Component({
  name: 'app-4876774809595069',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8799664466718325Component,
App1911665544523923Component,
App1991427038201925Component,
App6742985582199897Component,
App5704118304285403Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
