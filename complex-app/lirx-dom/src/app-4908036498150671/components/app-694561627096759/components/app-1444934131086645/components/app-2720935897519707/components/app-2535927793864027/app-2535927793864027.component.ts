import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3677903590088477Component } from "./components/app-3677903590088477/app-3677903590088477.component";
import { App654239693064247Component } from "./components/app-654239693064247/app-654239693064247.component";
import { App6288529821455595Component } from "./components/app-6288529821455595/app-6288529821455595.component";
import { App7775931440072907Component } from "./components/app-7775931440072907/app-7775931440072907.component";
import { App7207749303160559Component } from "./components/app-7207749303160559/app-7207749303160559.component";

// @ts-ignore
import html from './app-2535927793864027.component.html?raw';
// @ts-ignore
import style from './app-2535927793864027.component.scss?inline';

/**
 * COMPONENT: 'app-2535927793864027'
 */

export const App2535927793864027Component = new Component({
  name: 'app-2535927793864027',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3677903590088477Component,
App654239693064247Component,
App6288529821455595Component,
App7775931440072907Component,
App7207749303160559Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
