import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App145740859074917Component } from "./components/app-145740859074917/app-145740859074917.component";
import { App7134903425466791Component } from "./components/app-7134903425466791/app-7134903425466791.component";
import { App325822425332353Component } from "./components/app-325822425332353/app-325822425332353.component";
import { App5567540729065195Component } from "./components/app-5567540729065195/app-5567540729065195.component";
import { App5511858282166061Component } from "./components/app-5511858282166061/app-5511858282166061.component";

// @ts-ignore
import html from './app-3882249593046429.component.html?raw';
// @ts-ignore
import style from './app-3882249593046429.component.scss?inline';

/**
 * COMPONENT: 'app-3882249593046429'
 */

export const App3882249593046429Component = new Component({
  name: 'app-3882249593046429',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App145740859074917Component,
App7134903425466791Component,
App325822425332353Component,
App5567540729065195Component,
App5511858282166061Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
