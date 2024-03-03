import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1509099327101349Component } from "./components/app-1509099327101349/app-1509099327101349.component";
import { App8658514382232329Component } from "./components/app-8658514382232329/app-8658514382232329.component";
import { App4191529098081425Component } from "./components/app-4191529098081425/app-4191529098081425.component";
import { App6638685036889245Component } from "./components/app-6638685036889245/app-6638685036889245.component";
import { App5513658189658649Component } from "./components/app-5513658189658649/app-5513658189658649.component";

// @ts-ignore
import html from './app-1859100422544441.component.html?raw';
// @ts-ignore
import style from './app-1859100422544441.component.scss?inline';

/**
 * COMPONENT: 'app-1859100422544441'
 */

export const App1859100422544441Component = new Component({
  name: 'app-1859100422544441',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1509099327101349Component,
App8658514382232329Component,
App4191529098081425Component,
App6638685036889245Component,
App5513658189658649Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
