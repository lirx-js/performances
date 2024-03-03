import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App286280530194675Component } from "./components/app-286280530194675/app-286280530194675.component";
import { App2733056766226035Component } from "./components/app-2733056766226035/app-2733056766226035.component";
import { App837764854591843Component } from "./components/app-837764854591843/app-837764854591843.component";
import { App7352253373818009Component } from "./components/app-7352253373818009/app-7352253373818009.component";
import { App8006404383031571Component } from "./components/app-8006404383031571/app-8006404383031571.component";

// @ts-ignore
import html from './app-1803444696300183.component.html?raw';
// @ts-ignore
import style from './app-1803444696300183.component.scss?inline';

/**
 * COMPONENT: 'app-1803444696300183'
 */

export const App1803444696300183Component = new Component({
  name: 'app-1803444696300183',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App286280530194675Component,
App2733056766226035Component,
App837764854591843Component,
App7352253373818009Component,
App8006404383031571Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
