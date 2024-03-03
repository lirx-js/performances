import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8980541802031449Component } from "./components/app-8980541802031449/app-8980541802031449.component";
import { App617745231377981Component } from "./components/app-617745231377981/app-617745231377981.component";
import { App3276898665011115Component } from "./components/app-3276898665011115/app-3276898665011115.component";
import { App152945165153765Component } from "./components/app-152945165153765/app-152945165153765.component";
import { App1088746592333935Component } from "./components/app-1088746592333935/app-1088746592333935.component";

// @ts-ignore
import html from './app-8831191855510135.component.html?raw';
// @ts-ignore
import style from './app-8831191855510135.component.scss?inline';

/**
 * COMPONENT: 'app-8831191855510135'
 */

export const App8831191855510135Component = new Component({
  name: 'app-8831191855510135',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8980541802031449Component,
App617745231377981Component,
App3276898665011115Component,
App152945165153765Component,
App1088746592333935Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
