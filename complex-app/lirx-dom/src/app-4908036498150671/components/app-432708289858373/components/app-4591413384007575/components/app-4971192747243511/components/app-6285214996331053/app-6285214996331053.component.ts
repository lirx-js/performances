import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8978229500300937Component } from "./components/app-8978229500300937/app-8978229500300937.component";
import { App3716869144644361Component } from "./components/app-3716869144644361/app-3716869144644361.component";
import { App8622846270468251Component } from "./components/app-8622846270468251/app-8622846270468251.component";
import { App8017575973478019Component } from "./components/app-8017575973478019/app-8017575973478019.component";
import { App7479827021333559Component } from "./components/app-7479827021333559/app-7479827021333559.component";

// @ts-ignore
import html from './app-6285214996331053.component.html?raw';
// @ts-ignore
import style from './app-6285214996331053.component.scss?inline';

/**
 * COMPONENT: 'app-6285214996331053'
 */

export const App6285214996331053Component = new Component({
  name: 'app-6285214996331053',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8978229500300937Component,
App3716869144644361Component,
App8622846270468251Component,
App8017575973478019Component,
App7479827021333559Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
