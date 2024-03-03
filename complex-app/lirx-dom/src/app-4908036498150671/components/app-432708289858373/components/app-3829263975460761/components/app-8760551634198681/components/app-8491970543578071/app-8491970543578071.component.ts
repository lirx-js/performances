import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4772075166430207Component } from "./components/app-4772075166430207/app-4772075166430207.component";
import { App2367853276528647Component } from "./components/app-2367853276528647/app-2367853276528647.component";
import { App3469798476143993Component } from "./components/app-3469798476143993/app-3469798476143993.component";
import { App3114976006275271Component } from "./components/app-3114976006275271/app-3114976006275271.component";
import { App4859976351589615Component } from "./components/app-4859976351589615/app-4859976351589615.component";

// @ts-ignore
import html from './app-8491970543578071.component.html?raw';
// @ts-ignore
import style from './app-8491970543578071.component.scss?inline';

/**
 * COMPONENT: 'app-8491970543578071'
 */

export const App8491970543578071Component = new Component({
  name: 'app-8491970543578071',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4772075166430207Component,
App2367853276528647Component,
App3469798476143993Component,
App3114976006275271Component,
App4859976351589615Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
