import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8728973520405765Component } from "./components/app-8728973520405765/app-8728973520405765.component";
import { App5818713902582173Component } from "./components/app-5818713902582173/app-5818713902582173.component";
import { App2359616505237869Component } from "./components/app-2359616505237869/app-2359616505237869.component";
import { App1569842536360429Component } from "./components/app-1569842536360429/app-1569842536360429.component";
import { App2518214655806987Component } from "./components/app-2518214655806987/app-2518214655806987.component";

// @ts-ignore
import html from './app-6814383054935511.component.html?raw';
// @ts-ignore
import style from './app-6814383054935511.component.scss?inline';

/**
 * COMPONENT: 'app-6814383054935511'
 */

export const App6814383054935511Component = new Component({
  name: 'app-6814383054935511',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8728973520405765Component,
App5818713902582173Component,
App2359616505237869Component,
App1569842536360429Component,
App2518214655806987Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
