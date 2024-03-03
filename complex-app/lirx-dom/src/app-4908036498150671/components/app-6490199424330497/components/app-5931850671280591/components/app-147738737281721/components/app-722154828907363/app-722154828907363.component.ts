import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6283842188181147Component } from "./components/app-6283842188181147/app-6283842188181147.component";
import { App2743738841000377Component } from "./components/app-2743738841000377/app-2743738841000377.component";
import { App4254897967163475Component } from "./components/app-4254897967163475/app-4254897967163475.component";
import { App649041664398975Component } from "./components/app-649041664398975/app-649041664398975.component";
import { App7076810784222545Component } from "./components/app-7076810784222545/app-7076810784222545.component";

// @ts-ignore
import html from './app-722154828907363.component.html?raw';
// @ts-ignore
import style from './app-722154828907363.component.scss?inline';

/**
 * COMPONENT: 'app-722154828907363'
 */

export const App722154828907363Component = new Component({
  name: 'app-722154828907363',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6283842188181147Component,
App2743738841000377Component,
App4254897967163475Component,
App649041664398975Component,
App7076810784222545Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
