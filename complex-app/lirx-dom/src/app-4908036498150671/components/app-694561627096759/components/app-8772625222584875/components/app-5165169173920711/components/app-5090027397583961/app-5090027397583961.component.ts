import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4000212277395235Component } from "./components/app-4000212277395235/app-4000212277395235.component";
import { App1694324673677829Component } from "./components/app-1694324673677829/app-1694324673677829.component";
import { App3563638673084979Component } from "./components/app-3563638673084979/app-3563638673084979.component";
import { App719450244868975Component } from "./components/app-719450244868975/app-719450244868975.component";
import { App6178884767304185Component } from "./components/app-6178884767304185/app-6178884767304185.component";

// @ts-ignore
import html from './app-5090027397583961.component.html?raw';
// @ts-ignore
import style from './app-5090027397583961.component.scss?inline';

/**
 * COMPONENT: 'app-5090027397583961'
 */

export const App5090027397583961Component = new Component({
  name: 'app-5090027397583961',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4000212277395235Component,
App1694324673677829Component,
App3563638673084979Component,
App719450244868975Component,
App6178884767304185Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
