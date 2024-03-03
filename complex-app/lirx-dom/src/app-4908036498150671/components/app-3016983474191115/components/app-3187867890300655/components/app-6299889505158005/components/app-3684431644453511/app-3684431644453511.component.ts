import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App766736034168975Component } from "./components/app-766736034168975/app-766736034168975.component";
import { App7802229674179991Component } from "./components/app-7802229674179991/app-7802229674179991.component";
import { App4098309050097097Component } from "./components/app-4098309050097097/app-4098309050097097.component";
import { App5913709338298173Component } from "./components/app-5913709338298173/app-5913709338298173.component";
import { App3174715834557337Component } from "./components/app-3174715834557337/app-3174715834557337.component";

// @ts-ignore
import html from './app-3684431644453511.component.html?raw';
// @ts-ignore
import style from './app-3684431644453511.component.scss?inline';

/**
 * COMPONENT: 'app-3684431644453511'
 */

export const App3684431644453511Component = new Component({
  name: 'app-3684431644453511',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App766736034168975Component,
App7802229674179991Component,
App4098309050097097Component,
App5913709338298173Component,
App3174715834557337Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
