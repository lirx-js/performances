import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1413006620439987Component } from "./components/app-1413006620439987/app-1413006620439987.component";
import { App7270513835586793Component } from "./components/app-7270513835586793/app-7270513835586793.component";
import { App788914917384315Component } from "./components/app-788914917384315/app-788914917384315.component";
import { App926485390601923Component } from "./components/app-926485390601923/app-926485390601923.component";
import { App7782772873182601Component } from "./components/app-7782772873182601/app-7782772873182601.component";

// @ts-ignore
import html from './app-4696039191489985.component.html?raw';
// @ts-ignore
import style from './app-4696039191489985.component.scss?inline';

/**
 * COMPONENT: 'app-4696039191489985'
 */

export const App4696039191489985Component = new Component({
  name: 'app-4696039191489985',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1413006620439987Component,
App7270513835586793Component,
App788914917384315Component,
App926485390601923Component,
App7782772873182601Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
