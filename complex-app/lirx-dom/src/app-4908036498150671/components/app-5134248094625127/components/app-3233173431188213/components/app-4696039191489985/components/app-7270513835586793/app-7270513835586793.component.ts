import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1940093773490705Component } from "./components/app-1940093773490705/app-1940093773490705.component";
import { App1821105636602641Component } from "./components/app-1821105636602641/app-1821105636602641.component";
import { App599615107441119Component } from "./components/app-599615107441119/app-599615107441119.component";
import { App1238905873475893Component } from "./components/app-1238905873475893/app-1238905873475893.component";
import { App3974811050121965Component } from "./components/app-3974811050121965/app-3974811050121965.component";

// @ts-ignore
import html from './app-7270513835586793.component.html?raw';
// @ts-ignore
import style from './app-7270513835586793.component.scss?inline';

/**
 * COMPONENT: 'app-7270513835586793'
 */

export const App7270513835586793Component = new Component({
  name: 'app-7270513835586793',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1940093773490705Component,
App1821105636602641Component,
App599615107441119Component,
App1238905873475893Component,
App3974811050121965Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
