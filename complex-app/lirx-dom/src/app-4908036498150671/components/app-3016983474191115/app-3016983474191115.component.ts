import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2477811081155229Component } from "./components/app-2477811081155229/app-2477811081155229.component";
import { App194032053772705Component } from "./components/app-194032053772705/app-194032053772705.component";
import { App1523509327212477Component } from "./components/app-1523509327212477/app-1523509327212477.component";
import { App3392459778663437Component } from "./components/app-3392459778663437/app-3392459778663437.component";
import { App3187867890300655Component } from "./components/app-3187867890300655/app-3187867890300655.component";

// @ts-ignore
import html from './app-3016983474191115.component.html?raw';
// @ts-ignore
import style from './app-3016983474191115.component.scss?inline';

/**
 * COMPONENT: 'app-3016983474191115'
 */

export const App3016983474191115Component = new Component({
  name: 'app-3016983474191115',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2477811081155229Component,
App194032053772705Component,
App1523509327212477Component,
App3392459778663437Component,
App3187867890300655Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
