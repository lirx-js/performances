import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3388034976592747Component } from "./components/app-3388034976592747/app-3388034976592747.component";
import { App7861459350401381Component } from "./components/app-7861459350401381/app-7861459350401381.component";
import { App7823145899592227Component } from "./components/app-7823145899592227/app-7823145899592227.component";
import { App798507533445973Component } from "./components/app-798507533445973/app-798507533445973.component";
import { App4498404559083515Component } from "./components/app-4498404559083515/app-4498404559083515.component";

// @ts-ignore
import html from './app-1718602302133239.component.html?raw';
// @ts-ignore
import style from './app-1718602302133239.component.scss?inline';

/**
 * COMPONENT: 'app-1718602302133239'
 */

export const App1718602302133239Component = new Component({
  name: 'app-1718602302133239',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3388034976592747Component,
App7861459350401381Component,
App7823145899592227Component,
App798507533445973Component,
App4498404559083515Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
