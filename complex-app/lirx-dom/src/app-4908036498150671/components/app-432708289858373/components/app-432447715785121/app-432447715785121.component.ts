import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8185199940134637Component } from "./components/app-8185199940134637/app-8185199940134637.component";
import { App767279409674901Component } from "./components/app-767279409674901/app-767279409674901.component";
import { App252810234159681Component } from "./components/app-252810234159681/app-252810234159681.component";
import { App6409215153031715Component } from "./components/app-6409215153031715/app-6409215153031715.component";
import { App7508451768942257Component } from "./components/app-7508451768942257/app-7508451768942257.component";

// @ts-ignore
import html from './app-432447715785121.component.html?raw';
// @ts-ignore
import style from './app-432447715785121.component.scss?inline';

/**
 * COMPONENT: 'app-432447715785121'
 */

export const App432447715785121Component = new Component({
  name: 'app-432447715785121',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8185199940134637Component,
App767279409674901Component,
App252810234159681Component,
App6409215153031715Component,
App7508451768942257Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
