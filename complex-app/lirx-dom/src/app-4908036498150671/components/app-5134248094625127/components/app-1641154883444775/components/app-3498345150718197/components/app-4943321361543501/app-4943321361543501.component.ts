import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6725171870545987Component } from "./components/app-6725171870545987/app-6725171870545987.component";
import { App5857988124951927Component } from "./components/app-5857988124951927/app-5857988124951927.component";
import { App8883060628564007Component } from "./components/app-8883060628564007/app-8883060628564007.component";
import { App6860511891068601Component } from "./components/app-6860511891068601/app-6860511891068601.component";
import { App2701680937488473Component } from "./components/app-2701680937488473/app-2701680937488473.component";

// @ts-ignore
import html from './app-4943321361543501.component.html?raw';
// @ts-ignore
import style from './app-4943321361543501.component.scss?inline';

/**
 * COMPONENT: 'app-4943321361543501'
 */

export const App4943321361543501Component = new Component({
  name: 'app-4943321361543501',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6725171870545987Component,
App5857988124951927Component,
App8883060628564007Component,
App6860511891068601Component,
App2701680937488473Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
