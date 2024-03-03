import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1588590677835145Component } from "./components/app-1588590677835145/app-1588590677835145.component";
import { App6984712099893923Component } from "./components/app-6984712099893923/app-6984712099893923.component";
import { App638358814558379Component } from "./components/app-638358814558379/app-638358814558379.component";
import { App7236183553909985Component } from "./components/app-7236183553909985/app-7236183553909985.component";
import { App3151178338684493Component } from "./components/app-3151178338684493/app-3151178338684493.component";

// @ts-ignore
import html from './app-8089219980927989.component.html?raw';
// @ts-ignore
import style from './app-8089219980927989.component.scss?inline';

/**
 * COMPONENT: 'app-8089219980927989'
 */

export const App8089219980927989Component = new Component({
  name: 'app-8089219980927989',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1588590677835145Component,
App6984712099893923Component,
App638358814558379Component,
App7236183553909985Component,
App3151178338684493Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
