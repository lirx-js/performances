import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2808846557097555Component } from "./components/app-2808846557097555/app-2808846557097555.component";
import { App4472632974234077Component } from "./components/app-4472632974234077/app-4472632974234077.component";
import { App8679880122728821Component } from "./components/app-8679880122728821/app-8679880122728821.component";
import { App7961279533156511Component } from "./components/app-7961279533156511/app-7961279533156511.component";
import { App6552611360800877Component } from "./components/app-6552611360800877/app-6552611360800877.component";

// @ts-ignore
import html from './app-7180029422912567.component.html?raw';
// @ts-ignore
import style from './app-7180029422912567.component.scss?inline';

/**
 * COMPONENT: 'app-7180029422912567'
 */

export const App7180029422912567Component = new Component({
  name: 'app-7180029422912567',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2808846557097555Component,
App4472632974234077Component,
App8679880122728821Component,
App7961279533156511Component,
App6552611360800877Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
