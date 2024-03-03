import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4591413384007575Component } from "./components/app-4591413384007575/app-4591413384007575.component";
import { App432447715785121Component } from "./components/app-432447715785121/app-432447715785121.component";
import { App2298291098096197Component } from "./components/app-2298291098096197/app-2298291098096197.component";
import { App3829263975460761Component } from "./components/app-3829263975460761/app-3829263975460761.component";
import { App8374373048909625Component } from "./components/app-8374373048909625/app-8374373048909625.component";

// @ts-ignore
import html from './app-432708289858373.component.html?raw';
// @ts-ignore
import style from './app-432708289858373.component.scss?inline';

/**
 * COMPONENT: 'app-432708289858373'
 */

export const App432708289858373Component = new Component({
  name: 'app-432708289858373',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4591413384007575Component,
App432447715785121Component,
App2298291098096197Component,
App3829263975460761Component,
App8374373048909625Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
