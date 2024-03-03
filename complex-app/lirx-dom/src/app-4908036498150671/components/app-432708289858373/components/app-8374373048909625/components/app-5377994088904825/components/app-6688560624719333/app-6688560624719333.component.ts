import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6090807459230325Component } from "./components/app-6090807459230325/app-6090807459230325.component";
import { App4354559332946207Component } from "./components/app-4354559332946207/app-4354559332946207.component";
import { App6073101449235049Component } from "./components/app-6073101449235049/app-6073101449235049.component";
import { App7842084189813867Component } from "./components/app-7842084189813867/app-7842084189813867.component";
import { App7335118700072361Component } from "./components/app-7335118700072361/app-7335118700072361.component";

// @ts-ignore
import html from './app-6688560624719333.component.html?raw';
// @ts-ignore
import style from './app-6688560624719333.component.scss?inline';

/**
 * COMPONENT: 'app-6688560624719333'
 */

export const App6688560624719333Component = new Component({
  name: 'app-6688560624719333',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6090807459230325Component,
App4354559332946207Component,
App6073101449235049Component,
App7842084189813867Component,
App7335118700072361Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
