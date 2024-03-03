import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App535033672447105Component } from "./components/app-535033672447105/app-535033672447105.component";
import { App6841947261936017Component } from "./components/app-6841947261936017/app-6841947261936017.component";
import { App1389882466394717Component } from "./components/app-1389882466394717/app-1389882466394717.component";
import { App2407667002169951Component } from "./components/app-2407667002169951/app-2407667002169951.component";
import { App8318923831750553Component } from "./components/app-8318923831750553/app-8318923831750553.component";

// @ts-ignore
import html from './app-2154463750863073.component.html?raw';
// @ts-ignore
import style from './app-2154463750863073.component.scss?inline';

/**
 * COMPONENT: 'app-2154463750863073'
 */

export const App2154463750863073Component = new Component({
  name: 'app-2154463750863073',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App535033672447105Component,
App6841947261936017Component,
App1389882466394717Component,
App2407667002169951Component,
App8318923831750553Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
